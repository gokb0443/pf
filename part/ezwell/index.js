console.clear();

$('.top-bar .menu-box-1').mouseenter(function() {
  $('.top-bar').addClass('hover');
});


$('.top-bar .menu-box-1').mouseleave(function() {
  $('.top-bar').removeClass('hover');
});

$('.top-bar .menu-box-1').mouseenter(function() {
  $('.top-bar>.menu-box-1>.bg-box').addClass('active');
});


$('.top-bar .menu-box-1').mouseleave(function() {
  $('.top-bar>.menu-box-1>.bg-box').removeClass('active');
});