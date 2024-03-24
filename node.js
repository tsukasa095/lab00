var video = document.getElementById("overlay-video");
  var audio = document.getElementById("overlay-audio");
  
 video.addEventListener("play", function () {
        audio.play();
    });

    video.addEventListener("pause", function () {
        audio.pause();
    });

    video.addEventListener("ended", function () {
        audio.currentTime = 0;
        audio.play();
    });
