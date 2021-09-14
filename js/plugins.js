$(document).ready(function () {
  "use strict";
  var winH = $(window).height(),
    upperH = $(".upper-nav").innerHeight(),
    navH = $(".navbar").innerHeight(); //لازم تستعمل الاينر مع الهايت مش الهيابت لوحده عشان الاينر بتجيب الهوامش الداخليه
  $(".slide, .carousel-item").height(winH - (upperH + navH));
  //image section
  $(".image ul li").mouseenter("hover", function () {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).data("class") === "all") {
      $(".our-img .col-md-6").css("opacity", 1);
    } else {
      $(".our-img .col-md-6").css("opacity", ".5");
      $($(this).data("class")).parent().css("opacity", 1);
    }
  });
  $("nav ul li a").mouseenter("hover", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
