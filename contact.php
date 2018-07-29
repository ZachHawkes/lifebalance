<html>
<head>
<title>
    Contact
</title>
    <link rel="stylesheet" href="style.css">
    <script src='https://www.google.com/recaptcha/api.js'></script>
</head>
<body>
    <div class="content">
        <?php include("header.php"); ?>
        <div class="contact">
            <form action="contacted.php" method="post">
                Name:<br>
                <input type="text" name="name" id="name"><br><br>
                Email Address:<br>
                <input type="text" id="email" name="email"><br><br>
                Message:<br>
                <textarea style="width: 650px; height: 300px;" id="message" name="message"></textarea><br><br>
                <div class="g-recaptcha" data-sitekey="6Le2VxUUAAAAAJzQA6PJ1qX7GeXkaLXC-SRKUMhO"></div><br>
                <input type="submit" value="submit">
            </form>
        </div>
        <?php include("footer.php"); ?>
    </div>
</body>
</html>