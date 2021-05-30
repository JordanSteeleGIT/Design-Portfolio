$(function () {
  var link = $("#contents-List-Id a.nav-item");

  link.on("click", function (e) {
    var target = $($(this).attr("href"));
    $("html, body").animate(
      {
        scrollTop: target.offset().top - 80,
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
        offset = $(this).offset().top - 90,
        height = $(this).height();
      if (sTop >= offset && sTop < offset + height) {
        link.removeClass("active");
        $("#contents-List-Id")
          .find('[data-scroll="' + id + '"]')
          .addClass("active");
      }
    });
  }

  function changeHeader() {
    var ux = $("#ux-start").offset().top - 70;
    var visual = $("#visual-start").offset().top - 70;
    var final = $("#finisheddesign-start").offset().top - 70;

    var pos = $(window).scrollTop();
    var uxHeader = $("#contents-List-Id h2.ux-header");
    var visualHeader = $("#contents-List-Id h2.visual-header");
    var finishedHeader = $("#contents-List-Id h2.finished-header");

    if (pos > ux && pos < visual) {
      uxHeader.addClass("headerActive");
      visualHeader.removeClass("headerActive");
      finishedHeader.removeClass("headerActive");
    }

    if (pos > visual && pos < final) {
      visualHeader.addClass("headerActive");
      finishedHeader.removeClass("headerActive");
      uxHeader.removeClass("headerActive");
    }
    if (pos > final) {
      visualHeader.removeClass("headerActive");
      finishedHeader.addClass("headerActive");
      uxHeader.removeClass("headerActive");
    }
    if (pos < ux) {
      uxHeader.removeClass("headerActive");
    }
  }

  scrNav();
});
