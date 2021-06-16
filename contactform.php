<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $subject= $_POST['subject'];
    $message = $_POST['message'];
}

$mailTo = "Hello@A-Hughes.com";
$headers = "From: ". $mailFrom;

mail($mailTo,$subject,$message,$headers);
header("location: index.php?mailsend")
?>