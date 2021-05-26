var videoOne = document.querySelector("#video1");
var videoTwo = document.querySelector("#video2");
var videoThree = document.querySelector("#video3");

var btnOne = document.querySelector(".button-one");
var btnTwo = document.querySelector(".button-two");
var btnThree = document.querySelector(".button-three");

//For shame. This needs to be done properly next time.
function togglePlayPauseVideoOne() {
  if (videoOne.paused) {
    btnOne.className = "pause";
    videoOne.play();
  } else {
    btnOne.className = "play";
    videoOne.pause();
  }
}

function togglePlayPauseVideoTwo() {
  if (videoTwo.paused) {
    btnTwo.className = "pause";
    videoTwo.play();
  } else {
    btnTwo.className = "play";
    videoTwo.pause();
  }
}

function togglePlayPauseVideoThree() {
  if (videoThree.paused) {
    btnThree.className = "pause";
    videoThree.play();
  } else {
    btnThree.className = "play";
    videoThree.pause();
  }
}
