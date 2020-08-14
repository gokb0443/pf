console.clear();

// 탑바 시작

$(".top-bar .menu-box-1").mouseenter(function () {
  $(".top-bar>.menu-box-1>.bg-box").addClass("active");
});

$(".top-bar .menu-box-1").mouseleave(function () {
  $(".top-bar>.menu-box-1>.bg-box").removeClass("active");
});

// 탑바 끝


// 슬라이더 시작
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav"
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 2000
});
