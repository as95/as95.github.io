$(document).ready(function() {
  // $(".pens").hide();
  // $(".projects").hide();
  // $(".jumbo").hide();
  // $(".about").hide();
  
  function changeColor(someDiv){
    var colors = ["#e3001c", "#35FF69", "#20A4F3", "#F6F740", "#E396DF"];
    var randomIndex = Math.floor(Math.random() * 5);
    
    $(someDiv).css("color", colors[randomIndex]);
    
  };
  
  $("#siteName").click(function(){
    changeColor("#siteName");
  });
  
  
  $("#upBtn").css("color","transparent");
  
  $(document).scroll(function () {
    //the current height
    var topOffset = $(this).scrollTop();
    var windowHeight = $(window).height();
    
    if(topOffset > windowHeight){
      $("#upBtn").css("color","#222");
      $("#upBtn").addClass("slideInUp");
      $("#upBtn").addClass("red-hover");
      $("#upBtn").css("cursor", "pointer");
    } else{
      $("#upBtn").css("color","transparent");
      $("#upBtn").removeClass("red-hover");
      $("#upBtn").removeClass("slideInUp");
      $("#upBtn").css("cursor", "default");
    }
    
  });
  

  function toggleSideNav0() {
    if ($(".hamburger0").hasClass("is-active")) {
      $(".desktop-nav-2").show("slide", { direction: "left" }, 250);
      toggleDesktopNav1Shadow();
    } else {
      $(".desktop-nav-2").hide("slide", { direction: "left" }, 250);
      setTimeout(function() {
        toggleDesktopNav1Shadow();
      }, 250);
    }
    return;
  }

  function toggleHamburger0() {
    $(".hamburger0").toggleClass("is-active");
    return;
  }

  function toggleDesktopNav1Shadow() {
    $(".desktop-nav-1").toggleClass("card-shadow");
  }

  $(".desktop-nav-2").hide();
  $(".hamburger0").click(function() {
    toggleHamburger0();
    toggleSideNav0();
  });

  function toggleSideNav1() {
    if ($(".hamburger1").hasClass("is-active")) {
      $(".mobile-nav-2").show("slide", { direction: "left" }, 250);
    } else {
      $(".mobile-nav-2").hide("slide", { direction: "left" }, 250);
    }
    return;
  }

  function toggleHamburger1() {
    $(".hamburger1").toggleClass("is-active");
    return;
  }

  $(".mobile-nav-2").hide();
  $(".hamburger1").click(function() {
    toggleHamburger1();
    toggleSideNav1();
  });

  $(".responsive-item").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /****************************
  **** START SMOOTH SCROLL ****
  ****************************/
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            500,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
  /****************************
  ****  END SMOOTH SCROLL  ****
  ****************************/
});