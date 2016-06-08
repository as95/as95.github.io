$(document).ready(function() {


$(".toggle_container").hide(); 
$("button.reveal").click(function(){
    $(this).toggleClass("active").next().slideToggle("fast");
    
    if ($.trim($(this).text()) === 'About') {
        $(this).text('Less');
    } else {
        $(this).text('About');        
    }
    
    return false; 
});
 $("a[href='" + window.location.hash + "']").parent(".reveal").click();
    $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700); 
        return false;
      }
    }
  });
});