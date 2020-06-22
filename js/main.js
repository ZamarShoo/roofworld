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


let activeNumber = 0;
let activeReview = 0;
let bodyOld = undefined;
if (bodyOld == undefined) { bodyOld = document.querySelectorAll('div.l-dots > div.dot') }

function reviewChange(dotNumber) {
  let bodyNew;
  let dot;
  let review = document.querySelectorAll('div.reviews-wrapper > div.review');
  review[activeReview].classList.remove('reviewActive');
  review[dotNumber].classList.add('reviewActive');
  activeReview = dotNumber
  if (dotNumber > 3) { bodyNew = document.querySelectorAll('div.r-dots > div.dot'); dot = dotNumber - 4 }
  if (dotNumber < 4) { bodyNew = document.querySelectorAll('div.l-dots > div.dot'); dot = dotNumber}
  bodyOld[activeNumber].classList.remove('dotActive')
  bodyNew[dot].classList.add('dotActive')
  activeNumber = dot
  bodyOld = bodyNew
}

$(window).on("load resize", function(){
  var width = $(document).width();
   
  if (width > 1100) { 
    if($('.reviews-wrapper').hasClass('slick-initialized')) {
      $('.reviews-wrapper').slick('unslick');
      } 
    $('.reviews-wrapper').slick('unslick');
  } else { 
    $('.reviews-wrapper').not('.slick-initialized').slick({  
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      arrows: false,
      dots: true,
      dotsClass: 'review-dots',
    });
  }
});

$(function(){

  $('.slide-down').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#toScroll').offset().top }, 1000);
    e.preventDefault();
  });
  
  });
