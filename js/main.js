var $navHeader = $('header');
$(window).scroll(function(){
    if ($(this).scrollTop() > 400) {
      $navHeader.addClass('fixedNav');
    } else {
      $navHeader.removeClass('fixedNav');
    }
});

$('.burger').click(function() {
  $('.burger').toggleClass('burger-active')
  $('.header-right').toggleClass('mobile-menu')
  $('.header-right .btn').toggleClass('btn--red')
  $('.header-right .btn').toggleClass('mobile-btn')
})

$('.openPopup').click(function() {
    $(".dark-fon, .popup-out").show()
    $(".popup-out").css('display', 'flex')
})

$('.close-popup').click(function() {
  $(".dark-fon, .popup-out").hide()
})
