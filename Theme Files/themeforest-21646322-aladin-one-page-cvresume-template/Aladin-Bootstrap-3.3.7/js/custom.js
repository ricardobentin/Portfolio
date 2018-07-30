$(function() {

    "use strict";

    var wind = $(window);

    /* Preloader
          -------------------------------------------------------*/
    $(window).on('load', function() {
        $("#loader").fadeOut(500);
    });


    /* smooth scroll
    -------------------------------------------------------*/
    $.scrollIt({

        upKey: 40, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'linear', // the easing function for animation
        scrollTime: 1500, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed

    });


    /* navbar scrolling background
    -------------------------------------------------------*/
    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar-default");

        if (bodyScroll > 500) {

            navbar.addClass("nav-scroll");

        } else {

            navbar.removeClass("nav-scroll");
        }

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




    /* magnificPopup
    -------------------------------------------------------*/
    $('.img-pop').magnificPopup({

        type: 'image',
        gallery: {
            enabled: true
        }

    });

    $('.link').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
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


    // isotope
    $('.gallery').isotope({
        // options
        itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
        // options
    });

    // filter items on button click
    $('.filtering').on('click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({
            filter: filterValue
        });

    });

    $('.filtering').on('click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

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