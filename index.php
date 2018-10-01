<html>
<head>
<title>
    HOME
</title>
    <link rel="stylesheet" href="style.css">
<script>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
}
</script>
</head>
<body>
    <div class="content">
        <?php include("header.php"); ?>
        <div class="slideshow">
            <div class="vidcontainer">
            <video width="750px" class="centerVideo" preload="auto" controls autoplay>
                <source src="Videos/Energy Analysis.mp4">
            </video>
            </div>
        </div>
        <div class="secondContent">
            <div class="mainabout">
                <b>What is Energy Medicine</b>
                <p>
                    Everything is made of energy.  Our bodies are made of energy. Even our emotions are made of energy.  And that energy can be measured by science. Difficulties, challenges, and illness; even everyday living can cause imbalances and blocks in our energy pathways that can keep our bodies from healing and keep us from reaching our goals.  
                </p>
                <p>
                    Energy work identifies and releases any imbalances and blocks that you might not even know you have.  The result is open energetic pathways that are flowing freely, restoring normal function and balance to your body so it can heal itself and bring you back to wholeness.
                </p>
                <p>
                    It’s like trying to run a race.  Imagine you are at the starting line of a great race.  You are excited. You can’t wait to see how you will do.  The starting gun goes off and you begin to run.  But you look down and see a heavy ball and chain hooked to your ankle.  You can still move forward but you are so slow.  And it is so hard!  The ball and chain is like the energy imbalances and blocks that you have.  Once we remove those, it makes it easy to move forward, to make better choices, to reach your goals and for your body to heal itself. 
                </p>
                <p style="margin: 0px; padding: 0px;">Energy Work can address:</p>
                <ul style="display: inline-block;" class="secondContent-list">
                    <li>Improved Sleep</li>
                    <li>Weight Release</li>
                    <li>Overcoming Fears</li>
                    <li>Creating Joy in your life</li>
                    <li>Relationship Issues</li>
                    <li>Financial Blocks</li>
                </ul>
                <ul style="display: inline-block;" class="secondContent-list">
                    <li>Business Success and Relationships</li>
                    <li>Forgiveness for yourself and others</li>
                    <li>Mental Health Challenges</li>
                    <li>Better Communication</li>
                    <li>Physical Pain</li>
                    <li>And many more issues...</li>
                </ul>
            </div>
        </div>
        <div class="slideshow-container">
        <div class="mySlides fade">
            <div class="text">I love my energy sessions with Julie and I can’t believe how quickly I feel a difference.  As long as I can remember I have struggled with anxiety.  A few months ago I was waking up in the middle of the night with terrible stress and anxiety.  I couldn’t go back to sleep for hours.  After only a couple of sessions I found myself peacefully sleeping through the night! I have been blessed to have many experiences where Julie has helped me and I have felt immediate relief.  Once at work I had a twitch in my eye.  Julie was able to work on me and within a couple of minutes it was totally gone!  Julie has a great gift and my life has been blessed by my sessions with her.  K. H.
            </div>
        </div>

        <div class="mySlides fade" style="display: none;">
            <div class="text">I was very skeptical of working with you at first because of my lack of understanding of energy healing. After the first session I was shocked at the accuracy of my current emotions that were identified. I was much more open after that and on the path of self discovery. Working with you I learned a lot about myself that had been hidden from view, things that I didn’t even know about myself. After bringing those to light I was able to work through them. The results of that have been very rewarding, my confidence is much higher. My faith has increased immensely, my physical ailments have been reduced and some were totally eliminated. I feel like I am in control of my life and that I can make the necessary adjustments to get the results I want in my life. Thanks for your help! I am very appreciative of your sincerity in caring about me and helping me find the answers to my questions. – Dan F.
            </div>
        </div>

        <div class="mySlides fade" style="display: none;">
            <div class="text">When I went in for my appointment I was a little skeptical, but I was willing to try anything to help me change the way I was feeling! While at my appointment and having my negative emotions released I felt light almost like a bunch of weight had been lifted off my shoulders and I didn't feel cold anymore! Since I had my session done I can't explain the joy and happiness that has come back into our house! I feel as if we are a family again and that we can conquer anything together! I highly recommend Julie! - Amanda P.
            </div>
        </div>

        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <br>

        <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span> 
        <span class="dot" onclick="currentSlide(2)"></span> 
        <span class="dot" onclick="currentSlide(3)"></span> 
        </div>
        <div class="thirdcontent">
            <div class="mainabout" id="analysis">
                <h2 style="text-align: center;">Receive a FREE Energy Analysis! </h2>
                <p>Fill out the short questionnaire and I will check your energy systems to see if you have blocks or imbalances that need to be corrected.  The body has an order of healing.  I will also identify which issues need to be worked on first. </p>
                <a href="https://goo.gl/forms/zwKj4PokIRyzUgzy1" target="blank" style="color: black;">Click Here to Get your FREE Energy Analysis</a>
            </div>
        
        </div>
        <?php include("footer.php"); ?>
    </div>
</body>
</html>