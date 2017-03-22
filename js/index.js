$(document).ready(function(){
 ///$('.navigation').hide();
 //$('.frontpage').hide();
 //$('.work').hide();
 //$('.about').hide();
 //$('.contact').hide();
  
  
  function getCurrClass (portItem) {
    if(portItem.hasClass('planets')){
      return '.planets';
    }else if(portItem.hasClass('arizona-sase')){
      return '.arizona-sase';
    }else if(portItem.hasClass('loading-deck')){
      return '.loading-deck';
    }else if(portItem.hasClass('wiki-viewer')){
      return '.wiki-viewer';
    }else{
      return '.vpl';
    }
   
  };
  
  $('.portfolio-content').hide();
  
  $('.portfolio-item').click(function(){
    var currClass = getCurrClass($(this));
    var currContent = currClass + '-content';
     
    $(currClass).toggleClass('open');
    $(currClass).toggleClass('closed');
    setTimeout(function(){
      $(currContent).slideToggle();
    },500);
    
  });
  
  
  
  
  
  $(window).scroll(function(){
    
    var scrollLocation = $(window).scrollTop();

    if (scrollLocation <= 30) {
      $('.navigation').css('background-color','transparent');
      $('.nav-link').css('color','rgba(0, 0, 0, 1)');
      $('.siteTitle').css('color', 'black');
      $('.fa-bars').css('color', 'black');
    } else if (scrollLocation > 30) {
      $('.navigation').css('background-color','rgba(0, 0, 0, .9)');
      $('.nav-link').css('color','rgba(255, 255, 255, 1)');
      $('.siteTitle').css('color', 'white');
      $('.fa-bars').css('color', 'white');
    }
  });
});