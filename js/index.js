$(document).ready(function(){
 //$('.navigation').hide();
 //$('.frontpage').hide();
 //$('.work').hide();
 ///$('.about').hide();
 //$('.contact').hide();
  
  
  $(window).scroll(function(){
    
    var scrollLocation = $(window).scrollTop();

    if (scrollLocation <= 30) {
      $('.navigation').css('background-color','transparent');
      $('.nav-link').css('color','rgba(0, 0, 0, 1)');
      $('.siteTitle').css('color', 'black');
      $('.siteTitle').css('font-weight', '600');
      $('.fa-bars').css('color', 'black');
    } else if (scrollLocation > 30) {
      $('.navigation').css('background-color','rgba(0, 0, 0, .9)');
      $('.nav-link').css('color','rgba(255, 255, 255, 1)');
      $('.siteTitle').css('color', 'white');
      $('.siteTitle').css('font-weight', '400');
      $('.fa-bars').css('color', 'white');
    }
  });
});