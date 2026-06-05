<?php
/**
 * Coach's Call content editor.
 *
 * Lets the site owner edit selected page text (see private/content_fields.php).
 * Saved values are written to private/content.json, which the public pages read
 * through private/content.php. Login is a single email/password stored
 * hashed in private/data/admin_credentials.php (created on first visit).
 */

declare(strict_types=1);

$PRIVATE      = dirname(__DIR__) . '/private';
$CRED_FILE    = $PRIVATE . '/data/admin_credentials.php';
$CONTENT_JSON = $PRIVATE . '/data/content.json';
$MAX_LEN      = 2000;

require $PRIVATE . '/content.php'; // registry + cc_value() etc.

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

function write_credentials(string $path, string $email, string $hash): bool
{
    $php = "<?php\n// Admin login for the content editor. Not committed to git.\n"
         . 'return ' . var_export(['email' => $email, 'hash' => $hash], true) . ";\n";
    return atomic_write($path, $php);
}

function load_credentials(string $path): ?array
{
    if (!is_readable($path)) return null;
    $data = include $path;
    return (is_array($data) && isset($data['email'], $data['hash'])) ? $data : null;
}

function csrf_token(): string
{
    if (empty($_SESSION['cc_csrf'])) {
        $_SESSION['cc_csrf'] = bin2hex(random_bytes(32));
    }
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
$creds     = load_credentials($CRED_FILE);
$needsSetup = ($creds === null);
$loggedIn  = !empty($_SESSION['cc_admin']);
$action    = $_POST['action'] ?? '';
$errors    = [];

/* ---------- POST handling ---------- */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if (!csrf_ok()) {
        $errors[] = 'Your session expired. Please try again.';
    } elseif ($action === 'setup' && $needsSetup) {
        $em = strtolower(trim((string)($_POST['email'] ?? '')));
        $p  = (string)($_POST['password'] ?? '');
        $p2 = (string)($_POST['password2'] ?? '');
        if (!filter_var($em, FILTER_VALIDATE_EMAIL)) $errors[] = 'Please enter a valid email address.';
        if (strlen($p) < 8)               $errors[] = 'Password must be at least 8 characters.';
        if ($p !== $p2)                   $errors[] = 'The two passwords do not match.';
        if (!$errors) {
            $hash = password_hash($p, PASSWORD_DEFAULT);
            if (write_credentials($CRED_FILE, $em, $hash)) {
                session_regenerate_id(true);
                $_SESSION['cc_admin'] = true;
                $_SESSION['cc_user']  = $em;
                redirect('Admin account created. You are signed in.');
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
            if (hash_equals($creds['email'], $em) && password_verify($p, $creds['hash'])) {
                unset($_SESSION['cc_fail']);
                session_regenerate_id(true);
                $_SESSION['cc_admin'] = true;
                $_SESSION['cc_user']  = $creds['email'];
                redirect('Signed in.');
            }
            usleep(400000);
            $_SESSION['cc_fail'] = ['n' => ($fail['n'] + 1), 't' => $now];
            $errors[] = 'Incorrect email or password.';
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
                $raw = (string)($_POST['f'][$key] ?? '');
                $raw = str_replace("\r\n", "\n", $raw);
                if (mb_strlen($raw) > $GLOBALS['MAX_LEN']) {
                    $raw = mb_substr($raw, 0, $GLOBALS['MAX_LEN']);
                }
                $val = trim($raw);
                // Only store a real change; blanks/defaults fall back automatically.
                if ($val !== '' && $val !== (string)($meta['default'] ?? '')) {
                    $overrides[$key] = $val;
                }
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
        if (!password_verify($cur, $creds['hash'])) $errors[] = 'Current password is incorrect.';
        elseif (strlen($p) < 8)                     $errors[] = 'New password must be at least 8 characters.';
        elseif ($p !== $p2)                         $errors[] = 'The two new passwords do not match.';
        else {
            $hash = password_hash($p, PASSWORD_DEFAULT);
            if (write_credentials($CRED_FILE, $creds['email'], $hash)) {
                redirect('Password updated.');
            }
            $errors[] = 'Could not update the password.';
        }
    }
}

$flash = $_SESSION['cc_flash'] ?? null;
unset($_SESSION['cc_flash']);
$csrf  = csrf_token();
$user  = $_SESSION['cc_user'] ?? '';

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
  input[type=text], input[type=password], textarea {
      width:100%; padding:10px 12px; border:1px solid var(--line); border-radius:8px;
      font:inherit; color:var(--ink); background:#fbfdff; }
  input:focus, textarea:focus { outline:2px solid var(--blue); border-color:var(--blue); }
  textarea { resize:vertical; min-height:72px; }
  .btn { display:inline-block; border:0; border-radius:8px; padding:11px 18px; font:inherit;
         font-weight:700; cursor:pointer; background:var(--blue); color:#fff; }
  .btn:hover { filter:brightness(1.05); }
  .btn.ghost { background:#fff; color:var(--navy); border:1px solid var(--line); }
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
  a { color:var(--blue); }
</style>
</head>
<body>
<?php if ($flash): ?>
  <?php /* flash shown inside content areas below */ ?>
<?php endif; ?>

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
          <input type="password" name="password" required minlength="8"></label>
        <label class="fld"><span class="lab">Confirm password</span>
          <input type="password" name="password2" required minlength="8"></label>
        <button class="btn" type="submit">Create account</button>
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
          <input type="password" name="password" required></label>
        <button class="btn" type="submit">Sign in</button>
      </form>
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

    <div class="card">
      <details class="pw">
        <summary>Change password</summary>
        <form method="post" autocomplete="off" style="margin-top:12px">
          <input type="hidden" name="csrf" value="<?= e($csrf) ?>">
          <input type="hidden" name="action" value="changepw">
          <label class="fld"><span class="lab">Current password</span>
            <input type="password" name="current" required></label>
          <label class="fld"><span class="lab">New password <span class="help">(at least 8 characters)</span></span>
            <input type="password" name="password" required minlength="8"></label>
          <label class="fld"><span class="lab">Confirm new password</span>
            <input type="password" name="password2" required minlength="8"></label>
          <button class="btn ghost" type="submit">Update password</button>
        </form>
      </details>
    </div>
  </div>
<?php endif; ?>
</body>
</html>
