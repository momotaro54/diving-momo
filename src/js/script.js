jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  $(function () {
    $("#js-hamburger").click(function () {
      $("body").toggleClass("is-drawerActive");

      if ($(this).attr("aria-expanded") == "false") {
        $(this).attr("aria-expanded", "true");
        $("#js-global-menu").attr("aria-hidden", "false");
      } else {
        $(this).attr("aria-expanded", "false");
        $("#js-global-menu").attr("aria-hidden", "true");
      }
    });
    $("#js-drawer-background").click(function () {
      $("body").removeClass("is-drawerActive");
      $("#js-hamburger").attr("aria-expanded", "false");
      $("#js-global-menu").attr("aria-hidden", "true");
    });
  });

  const fvSwiper = new Swiper(".js-fv-swiper", {
    loop: true,
    slidesPerView: "1",
    speed: 4000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  const campaignSwiper = new Swiper(".js-campaign-swiper", {
    loop: false,
    initialSlide: 3.5,
    spaceBetween: 24,
    slidesPerView: "1",
    speed: 3000,
    loopAdditionalSlides: 2,
    width: 280,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: "3.5",
        spaceBetween: 40,
        width: 1265.5,
      },
      1920: {
        slidesPerView: "5",
        spaceBetween: 40,
        width: 1825,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var box = $(".colorbox"),
    speed = 700;

  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;
    image.css("opacity", "0");
    color.css("width", "0%");
    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });
});
