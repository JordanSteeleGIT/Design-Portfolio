const modal = document.querySelector(".modal");
const small_image = document.querySelectorAll(".preview-image");
const modal_image = document.querySelector(".full-img");

const con = document.querySelector("#item");

small_image.forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("open");
    const orginalSrc = img.getAttribute("data-orginal");
    modal_image.src = orginalSrc;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    modal_image.style.transform =
      "translate(" + -50 + "%, " + -50 + "%) " + "scale(" + 1 + ")";
    zoomedl = 0;
  }
});
var zoomedl = 0;

modal_image.addEventListener("click", (e) => {
  var current = { x: 0, y: 0, zoom: 1.5 };
  if (zoomedl == 0) {
    zoomedl = 1;

    nz = current.zoom;
    ix = e.clientX;
    iy = e.clientY;
    /// calculate click at new zoom
    nx = ix * nz;
    ny = iy * nz;
    /// move to the difference
    cx = ix - nx + 50;
    cy = iy - ny - 50;

    modal_image.style.transform =
      "translate(" + cx + "px, " + cy + "px) " + "scale(" + nz + ")";
    modal_image.style.cursor = "zoom-out";
  } else {
    modal_image.style.cursor = "zoom-in";
    modal_image.style.transform =
      "translate(" + -50 + "%, " + -50 + "%) " + "scale(" + 1 + ")";

    zoomedl = 0;
  }
});
