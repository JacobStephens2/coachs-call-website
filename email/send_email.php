<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'vendor/autoload.php';
require '../private/environment_variables.php'; 

/*

sample POST body:

email: jacob@stewardgoods.com
interest: coaching
name: name
organization: org
role: role
message: message

*/

$email = new \SendGrid\Mail\Mail();
$email->setFrom(FROM_EMAIL_ADDRESS, $_POST['name']);
$email->setReplyTo($_POST['email'], $_POST['name']);
$email->setSubject("Message from " . $_POST['name'] . " through " . DOMAIN);
if (DEV_SERVER === true) {
      $email->addTo(DEV_EMAIL_ADDRESS, DEV_NAME);
} else {
      $email->addTo(TO_EMAIL_ADDRESS, TO_NAME);
}
$email->addContent(
      "text/html", 
      "
            <p>Name: " . $_POST['name'] . "</p>
            <p>Role: " . $_POST['role'] . "</p>
            <p>Organization: " . $_POST['organization'] . "</p>
            <p>Email: " . $_POST['email'] . "</p>
            <p>Interest: " . $_POST['interest'] . "</p>
            <p>Message: " . $_POST['message'] . "</p>
      "
);

$sendgrid = new \SendGrid(SENDGRID_APIKEY);

try {
      if ($_POST['interest'] == 'Industrial') {
            // silently don't send given spam previously received with this
      } else {
            $response = $sendgrid->send($email);
            if ($response->statusCode() == 202) {
                  header("Location: /contact-success");
            } else {
                  header("Location: /contact-failure");
            }
      }
      header("Location: /contact-success");
} catch (Exception $e) {
      echo 'Caught exception: '. $e->getMessage() ."\n";
}

?>