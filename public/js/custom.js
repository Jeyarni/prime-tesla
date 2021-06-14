$(function() {
    'use strict'; // Start of use strict
   

     /*====================================
			Mobile Menu JS
		======================================*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-menu",
			duration: 600,
			closeOnClick:true,
		});
	
	//Carousel Speed
    $('#welcome-slide-carousel').carousel({
    interval: 3000
		});
    /*--------------------------
    scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
	/*------------------------------------------------------------------
        Year
    ------------------------------------------------------------------*/
	$(function(){
    var theYear = new Date().getFullYear();
    $('#year').html(theYear);
	});
	
	/*------------------------------------------------------------------
      Coming Soon Coutdown
    ------------------------------------------------------------------*/
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime(
                '<div class="cntdown"><span class="days"><strong>%-D</strong><p>Days</p></span></div><div class="cntdown"><span class="hour"><strong> %-H</strong><p>Hours</p></span></div> <div class="cntdown"><span class="minutes"><strong>%M</strong> <p>MINUTES</p></span></div><div class="cntdown"><span class="second"><strong> %S</strong><p>SECONDS</p></span></div>'
            ));
        });
    });
	/*---------------------------------------------------------------------
    		Magnific Popup 
    ------------------------------------------------------------------------*/
    if ($('.front-gallery, .gallery-section').length) {

        $('.front-gallery, .gallery-section').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by sbtechnosoft</small>';
                }
            }
        });
    }
    if ($('.image-popup-no-margins').length) {

        $('.image-popup-no-margins').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-with-zoom',
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300
            }
        });
    }

    /* Credit:)
https://getbootstrap.com
https://kenwheeler.github.io/slick
https://unsplash.it
http://stackoverflow.com/a/25847520
http://stackoverflow.com/a/34684385
*/
// Slick controls
$('#popup-image-gallery').on('shown.bs.modal', function() {
    $('.popup-slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.popup-slider-nav',
      // adaptiveHeight: true,
    });
    $('.popup-slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.popup-slider-for',
      dots: false,
      arrows: false,
      focusOnSelect: true,
      variableWidth: true,
      centerMode: true,
      infinite: true,
    });
  });
  // Slick.js: Get current and total slides (ie. 3/5)
  var $status = $('.pagingInfo');
  var $slickElement = $('.popup-slider-for');
  
  $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
  });
  
  // Slick slider sync situation
  var slides = $(".popup-slider-for .slick-track > .slick-slide").length;
  $('.popup-slider-for').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    var inFocus = $('.popup-slider-for .slick-current').attr('data-slick-index');
    $('.popup-slider-nav .slick-current').removeClass('slick-current');
    $('.popup-slider-nav .slick-slide[data-slick-index="' + inFocus + '"]').trigger('click');
  });
	
	/*---------------------------------------------------------------------
    Gallery Post Hove Effect for Caption Script
    ------------------------------------------------------------------------*/
    function gallery_hover() {

        if ($(".gallery-caption img").length) {
            $(".gallery-caption img").on('mouseover', function() {
                var img_width = $(".gallery-caption img").width();
                var img_height = $(".gallery-caption img").height();
                $(".gallery-caption .blur").css({
                    "height": img_height,
                    "width": img_width
                });
            });
        }
    }
    gallery_hover();
	
	/*------------------------------------------------------------------
    Owl Carousel for About us
	------------------------------------------------------------------*/
    var owl = $("#about");
    owl.owlCarousel({
        nav: true,
        margin: 10,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            600: {
                items: 1
            },
            700: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            },
            1400: {
                items: 1
            },
            1600: {
                items: 1
            }
        }
    });
	/*------------------------------------------------------------------
    Owl Carousel for Testimonials
	------------------------------------------------------------------*/
    
    owl.owlCarousel({
        nav: true,
        margin: 10,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            600: {
                items: 1
            },
            700: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            },
            1400: {
                items: 1
            },
            1600: {
                items: 1
            }
        }
    });
	$(".owl-prev").html('<i class="fa fa-angle-left"></i>');
    $(".owl-next").html('<i class="fa fa-angle-right"></i>');

	
    /*------------------------------------------------------------------
    Header Navigation
    ------------------------------------------------------------------*/
    if ($(window).width() > 767) {
        $('ul.navbar-nav li.dropdown').on('hover', function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        }, function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        });
    }
});

/*------------------------------------------------------------------
WOW
------------------------------------------------------------------*/

$( document ).ready(function() {
    new WOW().init()
});
/*------------------------------------------------------------------
 Loader 
------------------------------------------------------------------*/
jQuery(window).on("load scroll", function() {
    'use strict'; // Start of use strict
    // Loader 
     $("#dvLoading").fadeOut("fast");
	 // map zooming 	 
        $('.google-map').on('click', function() {
            $('.google-map').find('iframe').css("pointer-events", "auto");
        });
    //Animation Numbers	 
    jQuery('.animateNumber').each(function() {
        var num = jQuery(this).attr('data-num');
        var top = jQuery(document).scrollTop() + (jQuery(window).height());
        var pos_top = jQuery(this).offset().top;
        if (top > pos_top && !jQuery(this).hasClass('active')) {
            jQuery(this).addClass('active').animateNumber({
                number: num
            }, 2000);
        }
    });
});
	/*------------------------------------------------------------------
    FAQ
    ------------------------------------------------------------------*/
    $('.panel-heading a').on('click', function() {
        $('.panel-heading').removeClass('active');
        $(this).parents('.panel-heading').addClass('active');
    });
/*------------------------------------------------------------------
Count Down
------------------------------------------------------------------*/
if ($(".count-down").length) {
    var year = parseInt($(".count-down").attr("data-countdown-year"), 10);
    var month = parseInt($(".count-down").attr("data-countdown-month"), 3) - 1;
    var day = parseInt($(".count-down").attr("data-countdown-day"), 10);
    $(".count-down").countdown({
        until: new Date(year, month, day),
        padZeroes: true
    });
}