<html>
<head>
<title>
Thank You!
</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="content">
    <?php include("header.php"); ?>
    <?php
    //todo send email and display "Thank you for Contacting me!"
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $secret = "lifebalanaceenergy@gmail.com";
    // $secret = "hawkeye.zach@gmail.com";
    $subject = "Message from Website";
    if(mail($secret, $subject, $message, $email)){
        echo "<h3>Messasge Sent!</h3><h5>Thank you for contacting me!</h5>";
    } else {
        echo "<h3>Sorry the message was not sent. There was an error of some kind!</h3>";
    }

    ?>
    </div>
</body>
</html>
