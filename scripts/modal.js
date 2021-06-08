const modal = document.querySelector(".modal");
const small_Image = document.querySelectorAll(".preview-image");
const modal_Image = document.querySelector(".full-img");

const modal_Two = document.querySelector(".modal-two");
const small_Image_Two = document.querySelectorAll(".preview-image-two");
const modal_Image_Two = document.querySelector(".full-img-two");

const modal_Three = document.querySelector(".modal-three");
const small_Image_Three = document.querySelectorAll(".preview-image-three");
const modal_Image_Three = document.querySelector(".full-img-three");

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

// var zoomed_Three = 0;
// modal_Image_Three.addEventListener("click", (e) => {
//   var x = e.clientX;
//   var y = e.clientY;

//   if (zoomed_Three == false) {
//     modal_Image_Three.style.transformOrigin = x + "px " + y + "px";
//     modal_Image_Three.style.transform = "scale(" + 1.7 + ")";

//     modal_Image_Three.style.cursor = "zoom-out";
//     zoomed_Three = 1;
//   } else {
//     modal_Image_Three.style.transform =
//       "translate(" + -50 + "%) " + "scale(" + 1 + ")";
//     modal_Image_Three.style.cursor = "zoom-in";
//     zoomed_Three = 0;
//   }
// });
