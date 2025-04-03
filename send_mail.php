<?php
$to = "elalaouiyoussef179@gmail.com";
$subject = "Test Email from PHP";
$message = "Hello, this is a test email.";
$headers = "From: ggggg@gmail.com";

if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully.";
} else {
    echo "Email sending failed.";
}
?>
