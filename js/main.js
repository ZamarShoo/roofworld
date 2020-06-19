var $navHeader = $('header');
$(window).scroll(function(){
    if ($(this).scrollTop() > 400) {
      $navHeader.addClass('fixedNav');
    } else {
      $navHeader.removeClass('fixedNav');
    }
});