var container = document.querySelector(".side-Nav-Wrapper");
var container2 = document.querySelector(".side-Nav-Container");

var tester = document.querySelector(".next-Case-Study-Container");

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

window.onscroll = function () {
  stickyNav();
  test();
};

function stickyNav() {
  return document.documentElement.scrollTop > container.offsetTop + 680
    ? container.classList.add("sticky")
    : container.classList.remove("sticky");
}

// function test() {
//   if (document.documentElement.scrollTop > tester.offsetTop - 1000) {
//     container2.classList.remove("sticky");
//   }
// }
