$(function () {
  var link = $("#contents-List-Id a.nav-item");

  link.on("click", function (e) {
    var target = $($(this).attr("href"));
    $("html, body").animate(
      {
        scrollTop: target.offset().top - 15,
      },
      600
    );
    $(this).addClass("active");
    e.preventDefault();
  });

  $(window).on("scroll", function () {
    scrNav();
    changeHeader();
  });

  function scrNav() {
    var sTop = $(window).scrollTop(); //scroll position
    $("section").each(function () {
      //looping over sections
      var id = $(this).attr("id"), // getting ID of section
        offset = $(this).offset().top - 25,
        height = $(this).height();
      if (sTop >= offset && sTop < offset + height) {
        link.removeClass("active");
        $("#contents-List-Id")
          .find('[data-scroll="' + id + '"]')
          .addClass("active");
      }
    });
  }

  //this needs to be refactored. (currently just there to prove it can work!)
  function changeHeader() {
    var ux_Start = $(".research-start").offset().top - 25;
    var visual_Start = $(".visual-start").offset().top - 25;
    var finished_Start = $(".finished-start").offset().top - 25;
    var conclusion_Start = $(".conclusion-start").offset().top - 25;

    var pos = $(window).scrollTop();
    var uxHeader = $("#contents-List-Id h2.ux-header");
    var visualHeader = $("#contents-List-Id h2.visual-header");
    var finishedHeader = $("#contents-List-Id h2.finished-header");

    if (pos > ux_Start && pos < visual_Start) {
      uxHeader.addClass("headerActive");
      visualHeader.removeClass("headerActive");
      finishedHeader.removeClass("headerActive");
    }

    if (pos > visual_Start && pos < finished_Start) {
      visualHeader.addClass("headerActive");
      finishedHeader.removeClass("headerActive");
      uxHeader.removeClass("headerActive");
    }
    if (pos > finished_Start && pos < conclusion_Start) {
      visualHeader.removeClass("headerActive");
      finishedHeader.addClass("headerActive");
      uxHeader.removeClass("headerActive");
    }
    if (pos < ux_Start) {
      uxHeader.removeClass("headerActive");
    }
    if (pos > conclusion_Start) {
      finishedHeader.removeClass("headerActive");
      console.log("hello");
    }
  }
});
