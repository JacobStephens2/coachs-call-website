<?php
/**
 * Coach's Call content editor.
 *
 * Lets editors change selected page text (see private/content_fields.php).
 * Saved values go to private/data/content.json, read by private/content.php.
 *
 * Accounts (email + hashed password) live in private/data/admin_users.php.
 * The first visit creates the first editor; existing editors can invite more
 * by email. Password-reset and invite tokens are stored hashed, with expiry,
 * in private/data/reset.json and private/data/invites.json.
 */

declare(strict_types=1);

$PRIVATE      = dirname(__DIR__) . '/private';
$USERS_FILE   = $PRIVATE . '/data/admin_users.php';
$OLD_CRED     = $PRIVATE . '/data/admin_credentials.php'; // legacy single-account file (auto-migrated)
$CONTENT_JSON = $PRIVATE . '/data/content.json';
$RESET_FILE   = $PRIVATE . '/data/reset.json';
$INVITES_FILE = $PRIVATE . '/data/invites.json';
$MAX_LEN      = 2000;
$RESET_TTL    = 3600;    // 1 hour
$INVITE_TTL   = 259200;  // 3 days

require $PRIVATE . '/content.php';                       // registry + cc_value() etc.
@include_once $PRIVATE . '/environment_variables.php';   // DOMAIN + SMTP (invite / reset email)

/* ---------- session ---------- */
$https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
    || (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https');
session_set_cookie_params([
    'lifetime' => 0,
    'path'     => '/admin',
    'httponly' => true,
    'samesite' => 'Lax',
    'secure'   => $https,
]);
session_name('cc_admin_sess');
session_start();

$BASEURL = ($https ? 'https' : 'http') . '://'
         . (defined('DOMAIN') ? DOMAIN : ($_SERVER['HTTP_HOST'] ?? '')) . '/admin/';

/* ---------- helpers ---------- */
function e(string $s): string { return htmlspecialchars($s, ENT_QUOTES, 'UTF-8'); }

function atomic_write(string $path, string $contents): bool
{
    $tmp = $path . '.tmp' . bin2hex(random_bytes(4));
    if (@file_put_contents($tmp, $contents, LOCK_EX) === false) return false;
    if (!@rename($tmp, $path)) { @unlink($tmp); return false; }
    @chmod($path, 0640);
    return true;
}

/** Load accounts as [email => ['hash'=>..., 'created'=>...]]; migrate legacy file. */
function load_users(string $usersPath, string $oldCredPath): array
{
    if (is_readable($usersPath)) {
        $u = include $usersPath;
        if (is_array($u)) return $u;
    }
    if (is_readable($oldCredPath)) {
        $c = include $oldCredPath;
        if (is_array($c) && isset($c['email'], $c['hash'])) {
            $users = [strtolower((string)$c['email']) => ['hash' => $c['hash'], 'created' => time()]];
            save_users($usersPath, $users);
            return $users;
        }
    }
    return [];
}

function save_users(string $path, array $users): bool
{
    $php = "<?php\n// Content-editor accounts. Not committed to git.\n"
         . 'return ' . var_export($users, true) . ";\n";
    return atomic_write($path, $php);
}

/* token maps: { sha256(token) => { email, expires, ... } } — used for reset + invites */
function pending_add(string $path, string $token, array $data): bool
{
    $map = is_readable($path) ? (json_decode((string) file_get_contents($path), true) ?: []) : [];
    if (!is_array($map)) $map = [];
    $now = time();
    foreach ($map as $k => $v) {                 // prune expired
        if (!is_array($v) || ($v['expires'] ?? 0) < $now) unset($map[$k]);
    }
    $map[hash('sha256', $token)] = $data;
    return atomic_write($path, (string) json_encode($map));
}
function pending_lookup(string $path, string $token): ?array
{
    if ($token === '') return null;
    $map = is_readable($path) ? (json_decode((string) file_get_contents($path), true) ?: []) : [];
    if (!is_array($map)) return null;
    $entry = $map[hash('sha256', $token)] ?? null;
    return (is_array($entry) && time() < (int)($entry['expires'] ?? 0)) ? $entry : null;
}
function pending_remove(string $path, string $token): void
{
    $map = is_readable($path) ? (json_decode((string) file_get_contents($path), true) ?: []) : [];
    if (!is_array($map)) return;
    unset($map[hash('sha256', $token)]);
    atomic_write($path, (string) json_encode($map));
}

/** Send mail via the site's SMTP settings (same as the contact form). */
function send_mail(string $to, string $subject, string $body): bool
{
    $autoload = dirname(__DIR__) . '/email/vendor/autoload.php';
    if (!is_readable($autoload) || !defined('SMTP_HOST')) return false;
    require_once $autoload;
    $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
    try {
        $mail->CharSet  = 'UTF-8';   // render em dashes / curly quotes correctly
        $mail->Encoding = 'base64';
        $mail->isSMTP();
        $mail->Host       = SMTP_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = SMTP_USER;
        $mail->Password   = SMTP_PASS;
        $mail->SMTPSecure = SMTP_ENCRYPTION;
        $mail->Port       = SMTP_PORT;
        $mail->setFrom(SMTP_FROM_EMAIL, SMTP_FROM_NAME);
        $mail->addAddress($to);
        $mail->Subject = $subject;
        $mail->Body    = $body;
        $mail->send();
        return true;
    } catch (\Throwable $ex) {
        error_log('admin mail failed: ' . $ex->getMessage());
        return false;
    }
}

function csrf_token(): string
{
    if (empty($_SESSION['cc_csrf'])) $_SESSION['cc_csrf'] = bin2hex(random_bytes(32));
    return $_SESSION['cc_csrf'];
}
function csrf_ok(): bool
{
    return isset($_POST['csrf'], $_SESSION['cc_csrf'])
        && is_string($_POST['csrf'])
        && hash_equals($_SESSION['cc_csrf'], $_POST['csrf']);
}
function redirect(string $flash = '', string $type = 'ok'): void
{
    if ($flash !== '') $_SESSION['cc_flash'] = ['msg' => $flash, 'type' => $type];
    header('Location: ' . strtok($_SERVER['REQUEST_URI'], '?'));
    exit;
}

/* ---------- state ---------- */
$users      = load_users($USERS_FILE, $OLD_CRED);
$needsSetup = empty($users);
$loggedIn   = !empty($_SESSION['cc_admin']) && isset($users[$_SESSION['cc_user'] ?? '']);
$user       = $loggedIn ? (string) $_SESSION['cc_user'] : '';
$action     = $_POST['action'] ?? '';
$errors     = [];

/* ---------- POST handling ---------- */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if (!csrf_ok()) {
        $errors[] = 'Your session expired. Please try again.';

    } elseif ($action === 'setup' && $needsSetup) {
        $em = strtolower(trim((string)($_POST['email'] ?? '')));
        $p  = (string)($_POST['password'] ?? '');
        $p2 = (string)($_POST['password2'] ?? '');
        if (!filter_var($em, FILTER_VALIDATE_EMAIL)) $errors[] = 'Please enter a valid email address.';
        if (strlen($p) < 8) $errors[] = 'Password must be at least 8 characters.';
        if ($p !== $p2)     $errors[] = 'The two passwords do not match.';
        if (!$errors) {
            $users[$em] = ['hash' => password_hash($p, PASSWORD_DEFAULT), 'created' => time()];
            if (save_users($USERS_FILE, $users)) {
                session_regenerate_id(true);
                $_SESSION['cc_admin'] = true;
                $_SESSION['cc_user']  = $em;
                redirect('Editor account created. You are signed in.');
            }
            $errors[] = 'Could not save the account (file permissions?).';
        }

    } elseif ($action === 'login' && !$needsSetup) {
        $now  = time();
        $fail = $_SESSION['cc_fail'] ?? ['n' => 0, 't' => 0];
        if ($fail['n'] >= 5 && ($now - $fail['t']) < 60) {
            $errors[] = 'Too many attempts. Please wait a minute and try again.';
        } else {
            $em = strtolower(trim((string)($_POST['email'] ?? '')));
            $p  = (string)($_POST['password'] ?? '');
            $u  = $users[$em] ?? null;
            if ($u && password_verify($p, $u['hash'])) {
                unset($_SESSION['cc_fail']);
                session_regenerate_id(true);
                $_SESSION['cc_admin'] = true;
                $_SESSION['cc_user']  = $em;
                redirect('Signed in.');
            }
            usleep(400000);
            $_SESSION['cc_fail'] = ['n' => ($fail['n'] + 1), 't' => $now];
            $errors[] = 'Incorrect email or password.';
        }

    } elseif ($action === 'reset_request' && !$needsSetup) {
        $now  = time();
        $last = (int) ($_SESSION['cc_reset_t'] ?? 0);
        if ($now - $last < 30) {
            $errors[] = 'Please wait a moment before requesting another reset email.';
        } else {
            $_SESSION['cc_reset_t'] = $now;
            $em = strtolower(trim((string)($_POST['email'] ?? '')));
            if (isset($users[$em])) {
                $token = bin2hex(random_bytes(32));
                pending_add($RESET_FILE, $token, ['email' => $em, 'expires' => $now + $RESET_TTL]);
                send_mail($em, "Reset your Coach's Call password",
                    "We received a request to reset your Coach's Call content-editor password.\n\n"
                  . "Open this link to choose a new password (it expires in 1 hour):\n{$BASEURL}?reset={$token}\n\n"
                  . "If you didn't request this, you can safely ignore this email.");
            }
            redirect('If that email matches an editor account, a password-reset link has been sent. Please check your inbox.');
        }

    } elseif ($action === 'reset_save' && !$needsSetup) {
        $token = (string)($_POST['token'] ?? '');
        $res   = pending_lookup($RESET_FILE, $token);
        $p     = (string)($_POST['password'] ?? '');
        $p2    = (string)($_POST['password2'] ?? '');
        $em    = $res ? strtolower((string)$res['email']) : '';
        if (!$res || !isset($users[$em])) {
            $errors[] = 'This reset link is invalid or has expired. Please request a new one.';
        } elseif (strlen($p) < 8) {
            $errors[] = 'Password must be at least 8 characters.';
        } elseif ($p !== $p2) {
            $errors[] = 'The two passwords do not match.';
        } else {
            $users[$em]['hash'] = password_hash($p, PASSWORD_DEFAULT);
            if (save_users($USERS_FILE, $users)) {
                pending_remove($RESET_FILE, $token);
                unset($_SESSION['cc_fail']);
                redirect('Your password has been reset. Please sign in.');
            }
            $errors[] = 'Could not update the password.';
        }

    } elseif ($action === 'invite_accept') {
        $token = (string)($_POST['token'] ?? '');
        $inv   = pending_lookup($INVITES_FILE, $token);
        $p     = (string)($_POST['password'] ?? '');
        $p2    = (string)($_POST['password2'] ?? '');
        if (!$inv) {
            $errors[] = 'This invite link is invalid or has expired. Ask for a new invite.';
        } elseif (strlen($p) < 8) {
            $errors[] = 'Password must be at least 8 characters.';
        } elseif ($p !== $p2) {
            $errors[] = 'The two passwords do not match.';
        } else {
            $em = strtolower((string)$inv['email']);
            $users[$em] = ['hash' => password_hash($p, PASSWORD_DEFAULT), 'created' => time()];
            if (save_users($USERS_FILE, $users)) {
                pending_remove($INVITES_FILE, $token);
                session_regenerate_id(true);
                $_SESSION['cc_admin'] = true;
                $_SESSION['cc_user']  = $em;
                redirect('Welcome! Your editor account is ready.');
            }
            $errors[] = 'Could not create your account.';
        }

    } elseif ($action === 'invite' && $loggedIn) {
        $em = strtolower(trim((string)($_POST['invite_email'] ?? '')));
        if (!filter_var($em, FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'Please enter a valid email address to invite.';
        } elseif (isset($users[$em])) {
            $errors[] = $em . ' is already an editor.';
        } else {
            $token = bin2hex(random_bytes(32));
            pending_add($INVITES_FILE, $token, ['email' => $em, 'expires' => time() + $INVITE_TTL, 'by' => $user]);
            $sent = send_mail($em, "You're invited to edit the Coach's Call website",
                "{$user} has invited you to help edit the Coach's Call website.\n\n"
              . "Open this link to set your password and start editing (the link expires in 3 days):\n{$BASEURL}?invite={$token}\n\n"
              . "If you weren't expecting this, you can ignore this email.");
            if ($sent) redirect('Invite sent to ' . $em . '.');
            redirect('Invite created, but the email could not be sent. Please check the email settings.', 'err');
        }

    } elseif ($action === 'remove_editor' && $loggedIn) {
        $em = strtolower(trim((string)($_POST['email'] ?? '')));
        if ($em === $user)            $errors[] = 'You cannot remove your own account.';
        elseif (!isset($users[$em]))  $errors[] = 'That editor was not found.';
        elseif (count($users) <= 1)   $errors[] = 'You cannot remove the only editor.';
        else {
            unset($users[$em]);
            save_users($USERS_FILE, $users);
            redirect($em . ' has been removed as an editor.');
        }

    } elseif ($action === 'logout') {
        $_SESSION = [];
        session_destroy();
        header('Location: ' . strtok($_SERVER['REQUEST_URI'], '?'));
        exit;

    } elseif ($action === 'save' && $loggedIn) {
        $overrides = [];
        foreach ($GLOBALS['CC_FIELDS'] as $group) {
            foreach ($group['fields'] as $key => $meta) {
                $raw = str_replace("\r\n", "\n", (string)($_POST['f'][$key] ?? ''));
                if (mb_strlen($raw) > $GLOBALS['MAX_LEN']) $raw = mb_substr($raw, 0, $GLOBALS['MAX_LEN']);
                $val = trim($raw);
                if ($val !== '' && $val !== (string)($meta['default'] ?? '')) $overrides[$key] = $val;
            }
        }
        $json = json_encode($overrides, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        if ($json !== false && atomic_write($GLOBALS['CONTENT_JSON'], $json)) {
            redirect('Saved. Your changes are now live on the site.');
        }
        $errors[] = 'Could not save changes (file permissions?).';

    } elseif ($action === 'changepw' && $loggedIn) {
        $cur = (string)($_POST['current'] ?? '');
        $p   = (string)($_POST['password'] ?? '');
        $p2  = (string)($_POST['password2'] ?? '');
        if (!password_verify($cur, $users[$user]['hash'])) $errors[] = 'Current password is incorrect.';
        elseif (strlen($p) < 8) $errors[] = 'New password must be at least 8 characters.';
        elseif ($p !== $p2)     $errors[] = 'The two new passwords do not match.';
        else {
            $users[$user]['hash'] = password_hash($p, PASSWORD_DEFAULT);
            if (save_users($USERS_FILE, $users)) redirect('Password updated.');
            $errors[] = 'Could not update the password.';
        }
    }
}

$flash = $_SESSION['cc_flash'] ?? null;
unset($_SESSION['cc_flash']);
$csrf  = csrf_token();

/* ---------- invite / reset / forgot view state ---------- */
$inviteToken = (string)($_GET['invite'] ?? (($action === 'invite_accept') ? ($_POST['token'] ?? '') : ''));
$invite      = pending_lookup($INVITES_FILE, $inviteToken);
$inviteValid = !$loggedIn && $invite !== null;
if (!$loggedIn && $inviteToken !== '' && !$invite && $action !== 'invite_accept') {
    $errors[] = 'This invite link is invalid or has expired. Ask for a new invite.';
}

$resetToken = (string)($_GET['reset'] ?? (($action === 'reset_save') ? ($_POST['token'] ?? '') : ''));
$resetOk    = !$loggedIn && pending_lookup($RESET_FILE, $resetToken) !== null;
$showForgot = !$loggedIn && !$needsSetup && !$inviteValid && (isset($_GET['forgot']) || ($action === 'reset_request' && $errors));
if (!$loggedIn && $resetToken !== '' && !$resetOk && $action !== 'reset_save') {
    $errors[] = 'This reset link is invalid or has expired. Please request a new one.';
}

/* ---------- value to show in an editor field (posted-on-error, else current) ---------- */
function field_display(string $key): string
{
    if (($_POST['action'] ?? '') === 'save' && isset($_POST['f'][$key])) {
        return str_replace("\r\n", "\n", (string)$_POST['f'][$key]);
    }
    return cc_value($key);
}
?><!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Coach's Call — Content Editor</title>
<style>
  :root { --navy:#002856; --blue:#00a7e1; --ink:#1b2733; --line:#dfe6ee; --bg:#eef2f6; }
  * { box-sizing: border-box; }
  body { margin:0; font-family: system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
         color:var(--ink); background:var(--bg); line-height:1.5; }
  header.bar { background:var(--navy); color:#fff; padding:14px 18px; display:flex;
               align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap; }
  header.bar h1 { font-size:1.05rem; margin:0; font-weight:700; letter-spacing:.3px; }
  header.bar .who { font-size:.85rem; opacity:.85; }
  .wrap { max-width:760px; margin:0 auto; padding:22px 16px 64px; }
  .card { background:#fff; border:1px solid var(--line); border-radius:12px; padding:20px;
          margin:0 0 18px; box-shadow:0 1px 2px rgba(0,0,0,.04); }
  .card h2 { margin:0 0 4px; font-size:1.05rem; color:var(--navy); }
  .group-sub { margin:0 0 14px; color:#6b7a89; font-size:.85rem; }
  label.fld { display:block; margin:0 0 16px; }
  label.fld .lab { display:block; font-weight:600; font-size:.9rem; margin-bottom:6px; }
  label.fld .help { font-weight:400; color:#6b7a89; font-size:.8rem; }
  input[type=text], input[type=email], input[type=password], textarea {
      width:100%; padding:10px 12px; border:1px solid var(--line); border-radius:8px;
      font:inherit; color:var(--ink); background:#fbfdff; }
  input:focus, textarea:focus { outline:2px solid var(--blue); border-color:var(--blue); }
  textarea { resize:vertical; min-height:72px; }
  .btn { display:inline-block; border:0; border-radius:8px; padding:11px 18px; font:inherit;
         font-weight:700; cursor:pointer; background:var(--blue); color:#fff; }
  .btn:hover { filter:brightness(1.05); }
  .btn.ghost { background:#fff; color:var(--navy); border:1px solid var(--line); }
  .btn.small { padding:6px 12px; font-size:.85rem; }
  .btn.nav { background:rgba(255,255,255,.14); color:#fff; padding:8px 13px; font-weight:600; }
  .actions { position:sticky; bottom:0; background:linear-gradient(transparent,var(--bg) 22px);
             padding:14px 0 4px; margin-top:6px; }
  .flash { padding:12px 14px; border-radius:8px; margin:0 0 18px; font-size:.92rem; }
  .flash.ok { background:#e7f7ec; border:1px solid #b6e3c4; color:#1c6b38; }
  .flash.err { background:#fdecec; border:1px solid #f4c2c2; color:#9a2222; }
  .center { max-width:380px; margin:9vh auto 0; }
  .center .card h2 { font-size:1.2rem; margin-bottom:2px; }
  .muted { color:#6b7a89; font-size:.85rem; }
  details.pw { margin-top:6px; }
  details.pw summary { cursor:pointer; color:var(--navy); font-weight:600; font-size:.9rem; }
  .editor-row { display:flex; align-items:center; justify-content:space-between; gap:10px;
                padding:9px 0; border-bottom:1px solid var(--line); }
  .editor-row:last-of-type { border-bottom:0; }
  a { color:var(--blue); }
</style>
</head>
<body>

<?php if ($needsSetup): ?>
  <!-- ===== first-run setup ===== -->
  <div class="wrap center">
    <div class="card">
      <h2>Set up your admin login</h2>
      <p class="muted">Create the email and password you'll use to edit the website.</p>
      <?php foreach ($errors as $err): ?><div class="flash err"><?= e($err) ?></div><?php endforeach; ?>
      <form method="post" autocomplete="off">
        <input type="hidden" name="csrf" value="<?= e($csrf) ?>">
        <input type="hidden" name="action" value="setup">
        <label class="fld"><span class="lab">Email</span>
          <input type="email" name="email" required autocomplete="username" value="<?= e((string)($_POST['email'] ?? '')) ?>"></label>
        <label class="fld"><span class="lab">Password <span class="help">(at least 8 characters)</span></span>
          <input type="password" name="password" required minlength="8" autocomplete="new-password"></label>
        <label class="fld"><span class="lab">Confirm password</span>
          <input type="password" name="password2" required minlength="8" autocomplete="new-password"></label>
        <button class="btn" type="submit">Create account</button>
      </form>
    </div>
  </div>

<?php elseif ($inviteValid): ?>
  <!-- ===== accept invite (set password) ===== -->
  <div class="wrap center">
    <div class="card">
      <h2>Set your password</h2>
      <p class="muted">You've been invited to edit the Coach's Call website as
         <strong><?= e((string)$invite['email']) ?></strong>. Choose a password to finish.</p>
      <?php foreach ($errors as $err): ?><div class="flash err"><?= e($err) ?></div><?php endforeach; ?>
      <form method="post" autocomplete="off">
        <input type="hidden" name="csrf" value="<?= e($csrf) ?>">
        <input type="hidden" name="action" value="invite_accept">
        <input type="hidden" name="token" value="<?= e($inviteToken) ?>">
        <label class="fld"><span class="lab">Password <span class="help">(at least 8 characters)</span></span>
          <input type="password" name="password" required minlength="8" autocomplete="new-password"></label>
        <label class="fld"><span class="lab">Confirm password</span>
          <input type="password" name="password2" required minlength="8" autocomplete="new-password"></label>
        <button class="btn" type="submit">Create my account</button>
      </form>
    </div>
  </div>

<?php elseif ($resetOk): ?>
  <!-- ===== choose a new password (from reset link) ===== -->
  <div class="wrap center">
    <div class="card">
      <h2>Choose a new password</h2>
      <p class="muted">Enter a new password for your editor account.</p>
      <?php foreach ($errors as $err): ?><div class="flash err"><?= e($err) ?></div><?php endforeach; ?>
      <form method="post" autocomplete="off">
        <input type="hidden" name="csrf" value="<?= e($csrf) ?>">
        <input type="hidden" name="action" value="reset_save">
        <input type="hidden" name="token" value="<?= e($resetToken) ?>">
        <label class="fld"><span class="lab">New password <span class="help">(at least 8 characters)</span></span>
          <input type="password" name="password" required minlength="8" autocomplete="new-password"></label>
        <label class="fld"><span class="lab">Confirm new password</span>
          <input type="password" name="password2" required minlength="8" autocomplete="new-password"></label>
        <button class="btn" type="submit">Set new password</button>
      </form>
    </div>
  </div>

<?php elseif ($showForgot): ?>
  <!-- ===== forgot password (request reset email) ===== -->
  <div class="wrap center">
    <div class="card">
      <h2>Reset your password</h2>
      <p class="muted">Enter your editor email and we'll send a reset link.</p>
      <?php foreach ($errors as $err): ?><div class="flash err"><?= e($err) ?></div><?php endforeach; ?>
      <form method="post" autocomplete="off">
        <input type="hidden" name="csrf" value="<?= e($csrf) ?>">
        <input type="hidden" name="action" value="reset_request">
        <label class="fld"><span class="lab">Email</span>
          <input type="email" name="email" required autocomplete="username"></label>
        <button class="btn" type="submit">Send reset link</button>
        <a class="btn ghost" href="?">Back to sign in</a>
      </form>
    </div>
  </div>

<?php elseif (!$loggedIn): ?>
  <!-- ===== login ===== -->
  <div class="wrap center">
    <div class="card">
      <h2>Content Editor</h2>
      <p class="muted">Sign in to edit the website text.</p>
      <?php if ($flash): ?><div class="flash <?= $flash['type']==='ok'?'ok':'err' ?>"><?= e($flash['msg']) ?></div><?php endif; ?>
      <?php foreach ($errors as $err): ?><div class="flash err"><?= e($err) ?></div><?php endforeach; ?>
      <form method="post" autocomplete="off">
        <input type="hidden" name="csrf" value="<?= e($csrf) ?>">
        <input type="hidden" name="action" value="login">
        <label class="fld"><span class="lab">Email</span>
          <input type="email" name="email" required autocomplete="username"></label>
        <label class="fld"><span class="lab">Password</span>
          <input type="password" name="password" required autocomplete="current-password"></label>
        <button class="btn" type="submit">Sign in</button>
      </form>
      <p style="margin:14px 0 0"><a href="?forgot=1">Forgot password?</a></p>
    </div>
  </div>

<?php else: ?>
  <!-- ===== dashboard ===== -->
  <header class="bar">
    <h1>Coach's Call — Content Editor</h1>
    <span>
      <span class="who">Signed in as <?= e($user) ?></span>
      <form method="post" style="display:inline">
        <input type="hidden" name="csrf" value="<?= e($csrf) ?>">
        <input type="hidden" name="action" value="logout">
        <button class="btn nav" type="submit">Sign out</button>
      </form>
    </span>
  </header>
  <div class="wrap">
    <?php if ($flash): ?><div class="flash <?= $flash['type']==='ok'?'ok':'err' ?>"><?= e($flash['msg']) ?></div><?php endif; ?>
    <?php foreach ($errors as $err): ?><div class="flash err"><?= e($err) ?></div><?php endforeach; ?>

    <p class="muted">Edit the text below and click <strong>Save changes</strong>. Updates go live on the
       site right away. Leaving a box blank restores its original wording.</p>

    <form method="post">
      <input type="hidden" name="csrf" value="<?= e($csrf) ?>">
      <input type="hidden" name="action" value="save">

      <?php foreach ($GLOBALS['CC_FIELDS'] as $group): ?>
        <div class="card">
          <h2><?= e($group['label']) ?></h2>
          <?php foreach ($group['fields'] as $key => $meta): ?>
            <label class="fld">
              <span class="lab"><?= e($meta['label']) ?>
                <?php if (!empty($meta['help'])): ?><span class="help">— <?= e($meta['help']) ?></span><?php endif; ?>
              </span>
              <?php if (($meta['type'] ?? 'text') === 'multiline'): ?>
                <textarea name="f[<?= e($key) ?>]" rows="3" maxlength="<?= (int)$MAX_LEN ?>"><?= e(field_display($key)) ?></textarea>
              <?php else: ?>
                <input type="text" name="f[<?= e($key) ?>]" maxlength="<?= (int)$MAX_LEN ?>" value="<?= e(field_display($key)) ?>">
              <?php endif; ?>
            </label>
          <?php endforeach; ?>
        </div>
      <?php endforeach; ?>

      <div class="actions">
        <button class="btn" type="submit">Save changes</button>
        <a class="btn ghost" href="https://<?= e(defined('DOMAIN') ? DOMAIN : $_SERVER['HTTP_HOST']) ?>/" target="_blank" rel="noopener">View site</a>
      </div>
    </form>

    <!-- Editors -->
    <div class="card">
      <h2>Editors</h2>
      <p class="group-sub">People who can sign in and edit the site.</p>
      <?php foreach ($users as $em => $info): ?>
        <div class="editor-row">
          <span><?= e((string)$em) ?><?php if ($em === $user): ?> <span class="muted">(you)</span><?php endif; ?></span>
          <?php if ($em !== $user && count($users) > 1): ?>
            <form method="post" onsubmit="return confirm('Remove <?= e((string)$em) ?> as an editor?');">
              <input type="hidden" name="csrf" value="<?= e($csrf) ?>">
              <input type="hidden" name="action" value="remove_editor">
              <input type="hidden" name="email" value="<?= e((string)$em) ?>">
              <button class="btn ghost small" type="submit">Remove</button>
            </form>
          <?php endif; ?>
        </div>
      <?php endforeach; ?>

      <form method="post" autocomplete="off" style="margin-top:16px">
        <input type="hidden" name="csrf" value="<?= e($csrf) ?>">
        <input type="hidden" name="action" value="invite">
        <label class="fld"><span class="lab">Invite an editor by email
          <span class="help">— they'll get a link to set their own password</span></span>
          <input type="email" name="invite_email" placeholder="name@example.com" required></label>
        <button class="btn" type="submit">Send invite</button>
      </form>
    </div>

    <!-- Change password -->
    <div class="card">
      <details class="pw">
        <summary>Change my password</summary>
        <form method="post" autocomplete="off" style="margin-top:12px">
          <input type="hidden" name="csrf" value="<?= e($csrf) ?>">
          <input type="hidden" name="action" value="changepw">
          <label class="fld"><span class="lab">Current password</span>
            <input type="password" name="current" required autocomplete="current-password"></label>
          <label class="fld"><span class="lab">New password <span class="help">(at least 8 characters)</span></span>
            <input type="password" name="password" required minlength="8" autocomplete="new-password"></label>
          <label class="fld"><span class="lab">Confirm new password</span>
            <input type="password" name="password2" required minlength="8" autocomplete="new-password"></label>
          <button class="btn ghost" type="submit">Update password</button>
        </form>
      </details>
    </div>
  </div>
<?php endif; ?>
</body>
</html>
