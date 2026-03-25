<?php

require 'vendor/autoload.php';
require '../private/environment_variables.php';

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

$email = new \SendGrid\Mail\Mail();
$email->setFrom(FROM_EMAIL_ADDRESS, $name);
$email->setReplyTo($userEmail, $name);
$email->setSubject("Message from " . $name . " through " . DOMAIN);
if (DEV_SERVER === true) {
      $email->addTo(DEV_EMAIL_ADDRESS, DEV_NAME);
} else {
      $email->addTo(TO_EMAIL_ADDRESS, TO_NAME);
}
$email->addContent(
      "text/html",
      "
            <p>Name: " . $name . "</p>
            <p>Role: " . $role . "</p>
            <p>Organization: " . $organization . "</p>
            <p>Email: " . $userEmail . "</p>
            <p>Interest: " . $interest . "</p>
            <p>Message: " . $message . "</p>
      "
);

$sendgrid = new \SendGrid(SENDGRID_APIKEY);

try {
      $response = $sendgrid->send($email);
      if ($response->statusCode() == 202) {
            header("Location: /contact-success");
      } else {
            error_log("SendGrid error: status " . $response->statusCode());
            header("Location: /contact-failure");
      }
} catch (Exception $e) {
      error_log("SendGrid exception: " . $e->getMessage());
      header("Location: /contact-failure");
}
exit;

?>
