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
    //背景の黒ボックスクリックでもドロワーが消えるようにする
    $("#js-drawer-background").click(function () {
      $("body").removeClass("is-drawerActive");
      $("#js-hamburger").attr("aria-expanded", "false");
      $("#js-global-menu").attr("aria-hidden", "true");
    });
  });

  const swiper = new Swiper(".swiper", {
    autoplay: true,
    loop: true, // デフォルトはfalse
    clickable: true,
  });
});
