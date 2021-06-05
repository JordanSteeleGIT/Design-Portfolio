const modal = document.querySelector(".modal");
const modal_Two = document.querySelector(".modal-two");
const small_image = document.querySelectorAll(".preview-image");
const small_image_two = document.querySelectorAll(".preview-image-two");
const modal_image = document.querySelector(".full-img");
const modal_image_two = document.querySelector(".full-img-two");

small_image.forEach((img) => {
  img.addEventListener("click", () => {
    const orginalSrc = img.getAttribute("data-orginal");
    modal_image.src = orginalSrc;
    modal.classList.add("open");
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    modal_image.style.transform =
      "translate(" + -50 + "%, " + -50 + "%) " + "scale(" + 1 + ")";
    zoomed = 0;
    modal_image.src = "";
  }
  if (!e.target.classList.contains("modal")) {
  }
});
var zoomed = 0;

modal_image.addEventListener("click", (e) => {
  var current = { x: 0, y: 0, zoom: 1.5 };
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

    modal_image.style.transform =
      "translate(" + cx + "px, " + cy + "px) " + "scale(" + nz + ")";
    modal_image.style.cursor = "zoom-out";
  } else {
    modal_image.style.cursor = "zoom-in";
    modal_image.style.transform =
      "translate(" + -50 + "%, " + -50 + "%) " + "scale(" + 1 + ")";

    zoomed = 0;
  }
});

// modal_image.addEventListener("click", (e) => {
//   var x = e.clientX - 50;
//   var y = e.clientY + 50;

//   if (zoomed == false) {
//     modal_image.style.transformOrigin = x + "px " + y + "px";
//     modal_image.style.transform = "scale(" + 1.5 + ")";

//     modal_image.style.cursor = "zoom-out";
//     zoomed = 1;
//   } else {
//     modal_image.style.transform =
//       "translate(" + -50 + "%, " + -50 + "%) " + "scale(" + 1 + ")";
//     modal_image.style.cursor = "zoom-in";
//     zoomed = 0;
//   }
// });

//second
small_image_two.forEach((img2) => {
  img2.addEventListener("click", () => {
    const orginalSrc = img2.getAttribute("data-orginal");
    modal_image_two.src = orginalSrc;
    modal_Two.classList.add("open");
  });
});
//second
modal_Two.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-two")) {
    modal_Two.classList.remove("open");
    modal_image_two.src = "";
  }
  if (!e.target.classList.contains("modal-two")) {
    modal_Two.style.cursor = "pointer";
  }
});
modal_Two.addEventListener("mouseenter", function (event) {
  modal_Two.style.cursor = "pointer";
});

modal.addEventListener("mouseenter", function (event) {
  modal.style.cursor = "pointer";
});
