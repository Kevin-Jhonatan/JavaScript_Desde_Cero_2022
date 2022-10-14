window.onload = function () {
  var v = document.getElementsByTagName("video");
  v[0].setAttribute("id", "video1");

  var buttonPlay = document.getElementById("play-video-button");
  var buttonPause = document.getElementById("pause-video-button");
  var buttonUnmute = document.getElementById("unmute-video-button");
  var buttonMute = document.getElementById("mute-video-button");
  var vid = document.getElementById("video1");

  buttonPlay.onclick = play;
  buttonPause.onclick = pause;
  buttonUnmute.onclick = unmute;
  buttonMute.onclick = mute;

  function play() {
    vid.play();
    buttonPlay.style.display = "none";
    buttonPause.style.display = "initial";
  }

  function pause() {
    vid.pause();
    buttonPause.style.display = "none";
    buttonPlay.style.display = "initial";
  }

  function unmute() {
    vid.muted = false;
    buttonUnmute.style.display = "none";
    buttonMute.style.display = "initial";
  }

  function mute() {
    vid.muted = true;
    buttonMute.style.display = "none";
    buttonUnmute.style.display = "initial";
  }

  document.getElementById("scroll-down-button").onclick = scrollDown;

  function scrollDown() {
    console.log("PRESS GO!!!!");
    var scrollBottom = window.scroll(0, 700);
    scroll({
      bottom: scrollBottom,
      behavior: "smooth",
    });
    pause();
  }
};

window.addEventListener("scroll", function () {
  var video = document.getElementById("video1");
  var play = document.getElementById("play-video-button");
  var pause = document.getElementById("pause-video-button");
  if (
    window.location.origin + "/es" == window.location.href ||
    window.location.origin + "/en" == window.location.href ||
    window.location.origin + "/es/home-gran-torre-costanera" ==
      window.location.href ||
    window.location.origin + "/en/home-gran-torre-costanera" ==
      window.location.href ||
    window.location.origin + "/es/home-torre-hotel-costanera" ==
      window.location.href ||
    window.location.origin + "/en/home-torre-hotel-costanera" ==
      window.location.href
  ) {
    if (window.scrollY == 0) {
      video.play();
      play.style.display = "none";
      pause.style.display = "initial";
    } else {
      video.pause();
      pause.style.display = "none";
      play.style.display = "initial";
    }
  }
});
