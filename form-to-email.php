<?php
if(!lisset($_POST['submit'])) {
    echo "error; you need to submit the form!";
}

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

if(empty($name) || empty($visitor_email)) {
    echo "you need to fill in name and email!!!!";
    exit;
}

$email_from = 'gatusoparen@live.se';
$email_subject = "New form submission";
$email_body = "You have recived a new message from the user $name.\n". "email address: $visitor_email\n". "Here is the message:\n $message".

$to = "gatusoparen@live.se";
$headers = "From: $email_from \r\n";
$headers .= "Replay-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

?>