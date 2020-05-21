<?php

if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $mailFrom=$_POST['mail'];
    $massage=$_POST['massage'];

    $mailTo="anudhi.dissa@gmail.com";
    $header="From: ".$mailFrom;
    $txt ="You have received an e-mail from " .$name.".\n\n".$massage;

    mail($mailTo, $txt ,$header);
    header("location:index.php?mailse");
}