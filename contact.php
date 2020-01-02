<?php 
if($_POST["message"]) {
    mail("RobinJones335@gmail.com", "Form to email message",
    $_POST ["message"], "From: an@email.address");
}
?>