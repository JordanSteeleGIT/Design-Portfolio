var container = document.querySelector(".side-Nav-Wrapper");

window.onscroll = function () {
  stickyNav();
};

function stickyNav() {
  return document.documentElement.scrollTop > container.offsetTop + 680
    ? container.classList.add("sticky")
    : container.classList.remove("sticky");
}
