<?php

require 'vendor/autoload.php';
require '../private/environment_variables.php';

// Verify Turnstile
$turnstileResponse = $_POST['cf-turnstile-response'] ?? '';
if (empty($turnstileResponse)) {
      header("Location: /contact-failure");
      exit;
}
$verifyData = [
      'secret' => '0x4AAAAAACv2_WCopxdISRYxo4uu-VazkHY',
      'response' => $turnstileResponse,
      'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
];
$ch = curl_init('https://challenges.cloudflare.com/turnstile/v0/siteverify');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($verifyData));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
$verifyResult = json_decode(curl_exec($ch), true);
curl_close($ch);
if (empty($verifyResult['success'])) {
      error_log("Turnstile verification failed");
      header("Location: /contact-failure");
      exit;
}

// Validate required fields
$required = ['name', 'email', 'interest', 'role', 'organization', 'message'];
foreach ($required as $field) {
      if (!isset($_POST[$field]) || trim($_POST[$field]) === '') {
            header("Location: /contact-failure");
            exit;
      }
}

// Sanitize inputs
$name = htmlspecialchars(trim($_POST['name']), ENT_QUOTES, 'UTF-8');
$userEmail = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
$interest = htmlspecialchars(trim($_POST['interest']), ENT_QUOTES, 'UTF-8');
$role = htmlspecialchars(trim($_POST['role']), ENT_QUOTES, 'UTF-8');
$organization = htmlspecialchars(trim($_POST['organization']), ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars(trim($_POST['message']), ENT_QUOTES, 'UTF-8');

if (!$userEmail) {
      header("Location: /contact-failure");
      exit;
}

// Silently reject known spam pattern
if ($interest === 'Industrial') {
      header("Location: /contact-success");
      exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
      $mail->isSMTP();
      $mail->Host = SMTP_HOST;
      $mail->SMTPAuth = true;
      $mail->Username = SMTP_USER;
      $mail->Password = SMTP_PASS;
      $mail->SMTPSecure = SMTP_ENCRYPTION;
      $mail->Port = SMTP_PORT;

      $mail->setFrom(SMTP_FROM_EMAIL, SMTP_FROM_NAME);
      $mail->addReplyTo('jokrlevis@gmail.com', TO_NAME);

      if (DEV_SERVER === true) {
            $mail->addAddress(DEV_EMAIL_ADDRESS, DEV_NAME);
      } else {
            $mail->addAddress(TO_EMAIL_ADDRESS, TO_NAME);
      }

      $mail->isHTML(true);
      $mail->Subject = "Message from " . $name . " through " . DOMAIN;
      $mail->Body = "
            <p>Name: " . $name . "</p>
            <p>Role: " . $role . "</p>
            <p>Organization: " . $organization . "</p>
            <p>Email: " . $userEmail . "</p>
            <p>Interest: " . $interest . "</p>
            <p>Message: " . $message . "</p>
      ";
      $mail->AltBody = "Name: $name\nRole: $role\nOrganization: $organization\nEmail: $userEmail\nInterest: $interest\nMessage: $message";

      $mail->send();
      header("Location: /contact-success");
} catch (Exception $e) {
      error_log("SMTP error: " . $mail->ErrorInfo);
      header("Location: /contact-failure");
}
exit;

?>
