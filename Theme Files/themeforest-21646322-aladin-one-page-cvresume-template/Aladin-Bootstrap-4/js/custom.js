$(function() {

    "use strict";

    var wind = $(window);

    /* Preloader
          -------------------------------------------------------*/
    $(window).on('load', function() {
        $("#loader").fadeOut(500);
    });

	/*  $("body").on("contextmenu",function(e){
        return false;
    });
     */
   
   
	

    /* smooth scroll
    -------------------------------------------------------*/
  $.scrollIt({
  upKey: 38,             // key code to navigate to the next section
  downKey: 40,           // key code to navigate to the previous section
  easing: 'linear',      // the easing function for animation
  scrollTime: 600,       // how long (in ms) the animation takes
  activeClass: 'active', // class given to the active nav element
  onPageChange: null,    // function(pageIndex) that is called when page is changed
  topOffset: 0           // offste (in px) for fixed top navigation
});


    /* navbar scrolling background
    -------------------------------------------------------*/
    
 $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 5) {
            $('.navbar').addClass("bg-black");
        } else {
            $('.navbar').removeClass("bg-black");
        }
    });

    $(function () {
        $('.nav-link').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
        });
    });

		

	
    /* typejs
    -------------------------------------------------------*/
    $(' .typed-element').typed({
        strings: ["Magician", "Ui/Ux Designer", "Photographer"],
        loop: true,
        startDelay: 1000,
        backDelay: 2000
    });




    /* owlCarousel for testimonial
    -------------------------------------------------------*/
    $('.testimonial .owl-carousel').owlCarousel({

        items: 1,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 500

    });

    /* owlCarousel for Single Portfolio
    -------------------------------------------------------*/
    $('.single-portfolio .owl-carousel').owlCarousel({

        items: 1,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 500

    });

    /* owlCarousel Blog
    -------------------------------------------------------*/
    $('.clients .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 500,
        stopOnHover: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 2,
                nav: false
            },
            767: {
                items: 3,
                nav: false
            },
            991: {
                items: 4,
                nav: false,
                loop: false
            }
        }
    });




    /* owlCarousel Blog
    -------------------------------------------------------*/
    $('.blog .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 500,
        stopOnHover: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false,
                loop: false
            }
        }
    });






   

 $('.img-pop').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }
        });


    // counterUp
    $('.numbers .counter').countUp({
        delay: 10,
        time: 1500
    });




    /* Progress Bars
    -------------------------------------------------------*/
    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop()

        if (bodyScroll > 2200) {

            $('#bar1').barfiller({
                // color of bar
                barColor: '#4183D7',
                // duration in ms
                duration: 2000
            });

            $('#bar2').barfiller({
                // color of bar
                barColor: '#4183D7',
                // duration in ms
                duration: 1800
            });

            $('#bar3').barfiller({
                // color of bar
                barColor: '#4183D7',
                // duration in ms
                duration: 1600
            });

            $('#bar4').barfiller({
                // color of bar
                barColor: '#4183D7',
                // duration in ms
                duration: 1400
            });
            $('#bar5').barfiller({
                // color of bar
                barColor: '#4183D7',
                // duration in ms
                duration: 1200
            });

            $('#bar6').barfiller({
                // color of bar
                barColor: '#4183D7',
                // duration in ms
                duration: 1000
            });

        }

    });



    /* Contact Form
    -------------------------------------------------------*/
    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the 
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })




});



$(window).on("load", function() {



	var $container = $('.gallery');
            var $filter = $('#menu-filter');
            $container.isotope({
                filter: '*',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });

            $filter.find('a').on("click",function() {
                var selector = $(this).attr('data-filter');
                $filter.find('a').removeClass('active');
                $(this).addClass('active');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        animationDuration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
	
	

    // Wow
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 50, // default
        mobile: true, // default
        live: true // default
    });
    wow.init();

	
    /*-----------------------
        google map
      -----------------------*/


    if ($('.map-canvas').length) {
        var styles = [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }];

        var mapOptions = {
            center: new google.maps.LatLng(23.7647301, 90.3567407),
            zoom: 12,
            scrollwheel: false,
            panControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            disableDefaultUI: false,
            zoomControl: true,
            disableDoubleClickZoom: false,
            fullscreenControl: false,
            styles: styles
        };
        var initMap = function() {
            var contactdata = $('#contact-map').data('content');
            var map = new google.maps.Map(document.getElementById("contact-map"), mapOptions);
            var bounds = new google.maps.LatLngBounds();
            var myIcon = new google.maps.MarkerImage("img/marker-pin.svg", null, null, null, new google.maps.Size(50, 62));
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(23.7647301, 90.3567407),
                map: map,
                icon: myIcon
            });



        };
        initMap();
        google.maps.event.addDomListener(window, 'load resize', initMap);
    }


})