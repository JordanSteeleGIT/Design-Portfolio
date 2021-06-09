const modal = document.querySelector(".modal");
const small_Image = document.querySelectorAll(".preview-image");
const modal_Image = document.querySelector(".full-img");

const modal_Two = document.querySelector(".modal-two");
const small_Image_Two = document.querySelectorAll(".preview-image-two");
const modal_Image_Two = document.querySelector(".full-img-two");

const modal_Three = document.querySelector(".modal-three");
const small_Image_Three = document.querySelectorAll(".preview-image-three");
const modal_Image_Three = document.querySelector(".full-img-three");

const modal_Four = document.querySelector(".modal-four");
const small_Image_Four = document.querySelectorAll(".preview-image-four");
const modal_Image_Four = document.querySelector(".full-img-four");

//Modal one
small_Image.forEach((img) => {
  img.addEventListener("click", () => {
    const orginalSrc = img.getAttribute("data-orginal");
    modal_Image.src = orginalSrc;
    modal.classList.add("open");
  });
});
//Modal one
modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    modal_Image.style.transform =
      "translate(" + -50 + "%, " + -50 + "%) " + "scale(" + 1 + ")";
    zoomed = 0;
    modal_Image.src = "";
  }
  if (!e.target.classList.contains("modal")) {
  }
});
var zoomed = 0;
//Modal one
modal_Image.addEventListener("click", (e) => {
  var current = { x: 0, y: 0, zoom: 1.7 };
  if (zoomed == 0) {
    zoomed = 1;

    nz = current.zoom;
    ix = e.clientX;
    iy = e.clientY;
    /// calculate click at new zoom
    nx = ix * nz;
    ny = iy * nz;
    /// move to the difference
    cx = ix - nx + 50;
    cy = iy - ny - 50;

    modal_Image.style.transform =
      "translate(" + cx + "px, " + cy + "px) " + "scale(" + nz + ")";
    modal_Image.style.cursor = "zoom-out";
  } else {
    modal_Image.style.cursor = "zoom-in";
    modal_Image.style.transform =
      "translate(" + -50 + "%, " + -50 + "%) " + "scale(" + 1 + ")";

    zoomed = 0;
  }
});

//Modal two
small_Image_Two.forEach((img2) => {
  img2.addEventListener("click", () => {
    const orginalSrc = img2.getAttribute("data-orginal");
    modal_Image_Two.src = orginalSrc;
    modal_Two.classList.add("open");
  });
});
//Modal two
modal_Two.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-two")) {
    modal_Two.classList.remove("open");
    modal_Image_Two.src = "";
  }
  if (!e.target.classList.contains("modal-two")) {
    modal_Two.style.cursor = "pointer";
  }
});
//Modal two
modal_Two.addEventListener("mouseenter", function (event) {
  modal_Two.style.cursor = "pointer";
});
//Modal two
modal_Two.addEventListener("mouseenter", function (event) {
  modal_Two.style.cursor = "pointer";
});

////////////////////////////////////////////////////////////

//Modal three
small_Image_Three.forEach((img2) => {
  img2.addEventListener("click", () => {
    const orginalSrc = img2.getAttribute("data-orginal");
    modal_Image_Three.src = orginalSrc;
    modal_Three.classList.add("open");
  });
});
//Modal three
modal_Three.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-three")) {
    modal_Three.classList.remove("open");
    modal_Image_Three.src = "";
  }
  if (!e.target.classList.contains("modal-three")) {
    modal_Three.style.cursor = "pointer";
  }
});
//Modal three
modal_Three.addEventListener("mouseenter", function (event) {
  modal_Three.style.cursor = "pointer";
});
//Modal three
modal_Three.addEventListener("mouseenter", function (event) {
  modal_Three.style.cursor = "pointer";
});

/////////////////////////////////////////////////////////
//Modal Four
small_Image_Four.forEach((img2) => {
  img2.addEventListener("click", () => {
    const orginalSrc = img2.getAttribute("data-orginal");
    modal_Image_Four.src = orginalSrc;
    modal_Four.classList.add("open");
  });
});
//Modal Four
modal_Four.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-four")) {
    modal_Four.classList.remove("open");
    modal_Image_Four.src = "";
  }
  if (!e.target.classList.contains("modal-four")) {
    modal_Four.style.cursor = "pointer";
  }
});
//Modal Four
modal_Four.addEventListener("mouseenter", function (event) {
  modal_Four.style.cursor = "pointer";
});
//Modal Four
modal_Four.addEventListener("mouseenter", function (event) {
  modal_Four.style.cursor = "pointer";
});

var zoomed_Four = 0;
modal_Image_Four.addEventListener("click", (e) => {
  var x = e.clientX;
  var y = e.clientY;

  if (zoomed_Four == false) {
    modal_Image_Four.style.transformOrigin = x + "px " + y + "px";
    modal_Image_Four.style.transform = "scale(" + 2 + ")";

    modal_Image_Four.style.cursor = "zoom-out";
    zoomed_Four = 1;
  } else {
    modal_Image_Four.style.transform =
      "translate(" + -50 + "%) " + "scale(" + 1 + ")";
    modal_Image_Four.style.cursor = "zoom-in";
    zoomed_Four = 0;
  }
});
