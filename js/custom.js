jQuery(document).ready(function($) {
    $('.reviewshortcode').children('div').addClass('hide');
    $('.rev-trigger').click(function() {
        $('.rev-popup, .rev-popup-wrap, body').addClass('open');
    });
    $('.rev-popup-wrap .popup-close.top-close').click(function() {
        $('.rev-popup, .rev-popup-wrap, body').removeClass('open');
    })


    $('.rev-pic-trigger').click(function() {
        $('.rev-popup-pic, .rev-popup-pic-wrap, body').addClass('open');
    });
    $('.rev-popup-pic-wrap .popup-pic-close.top-close').click(function() {
        $('.rev-popup-pic, .rev-popup-pic-wrap, body').removeClass('open');
    })



    $('.rev-write-trigger').click(function() {
        $('.reviews-form').slideToggle();
        $('.form-holder').toggleClass('open');
    });
    $('.reviews-form .popup-close').click(function() {
        $(this).parents('.reviews-form').slideUp();
        $('.form-holder').removeClass('open');
    });
    $('.reviews-form .acf-button.button').click(function() {
        var star_value = $('select#acf-field_5ae8b1ad91bbf').val();
        if (star_value == 5) {
            window.open('https://bulldogyoga.com/review-thankyou/', 'popUpWindow', 'height=600,width=600,scrollbars=yes,menubar=no');
        } else {
            $('.reviews-form').slideUp();
            $('.form-holder .thanks').slideToggle();
        }
    });
    $("label[for='acf-_post_title']").text('Name');
    $('.thanks .thanks-close').click(function() {
        $('.rev-popup, .rev-popup-wrap, body').removeClass('open');
    });
    var $grid = $('.reviews-holder')
    $grid.isotope({
        itemSelector: '.review-single',
        layoutMode: 'vertical',
    })
    $(document).click(function() {
        $('.rev-popup, .rev-popup-wrap, body').removeClass('open');
    });
    $(".rev-popup-wrap, .rev-trigger").click(function(e) {
        e.stopPropagation();
    });

    $(document).click(function() {
        $('.rev-popup-pic, .rev-popup-pic-wrap, body').removeClass('open');
    });
    $(".rev-popup-pic-wrap, .rev--pic-trigger").click(function(e) {
        e.stopPropagation();
    });


    $('.google-reviews').wrapInner('<a href="https://search.google.com/local/writereview?placeid=ChIJYfVBI1uVxokR6PRi45c-Mcw" target="_blank"></a>');
    $('#acf-field_5ae8b1ad91bbf').select2();
    $('body').arrive('.ctct-form-embed', function() {
        $('#subscribe-newsletter .ctct-form-button').insertAfter('#subscribe-newsletter #email_address_field_0');
        $("#email_address_0").attr("placeholder", "Email");
        var $firstInput = $('#email_list_0_0').parent('.ctct-form-listitem');
        var $secondInput = $('#email_list_1_0').parent('.ctct-form-listitem');
        $firstInput.insertAfter($secondInput);
    });
    $('body').arrive('.healcode.registration', function() {
        $('#registrations_client_indexes_1-Newsletter_Opt-in').val('1-Yes');
        $('.hc-registration-email-opt-in').css('display', 'none');
    });
    $('.pricing__deco').matchHeight();
    $('.pricing_image').matchHeight();
    jQuery('.in-studio-button').click(function() {
        jQuery('.schedule-location-popup').addClass('active');
        jQuery('.popup-wrap').addClass('active');
        jQuery('.popup-overlay').addClass('active');
    });
    jQuery('.popup-close').click(function() {
        jQuery('.schedule-location-popup').removeClass('active');
        jQuery('.popup-wrap').removeClass('active');
    });
    jQuery('.drop-trigger a').click(function() {
        jQuery(this).toggleClass('open');
        jQuery('.locations.drop-container').slideToggle();
    });
    jQuery('.popup-left.locations-buy a').click(function() {
        jQuery('.popup-left .popup-slide').toggleClass('open');
    });
    jQuery('.popup-left.locations-buy .popup-close i').click(function() {
        jQuery('.popup-left .popup-slide').removeClass('open');
    });
    jQuery('.popup-right.locations-buy a').click(function() {
        jQuery('.popup-right .popup-slide').toggleClass('open');
    });
    jQuery('.popup-right.locations-buy .popup-close i').click(function() {
        jQuery('.popup-right .popup-slide').removeClass('open');
    });
    jQuery('#mega-menu-wrap-primary #mega-menu-primary li.mega-menu-megamenu > ul.mega-sub-menu > li.mega-menu-row .mega-menu-column > ul.mega-sub-menu > li.mega-menu-item.widget_media_image a').click(function() {
        jQuery('.mega-menu-wrap').removeClass('open');
        jQuery('.mega-menu-toggle').removeClass('mega-menu-open');
    });
    jQuery('.gc-drop-trigger a').click(function() {
        jQuery(this).toggleClass('open');
        jQuery('.gc-drop-container').slideToggle();
    });
    jQuery('.mega-menu-toggle').click(function() {
        jQuery('.mega-menu-wrap').toggleClass('open');
        jQuery('body').toggleClass('mobile-menu-active');
    });
    
    var figure = jQuery(".oc-dt-block").hover(hoverVideo, hideVideo);

    function hoverVideo(e) {
        jQuery('video', this).get(0).play();
          $('.oc-dt-block video').prop('muted', false);
    }

    function hideVideo(e) {
        jQuery('video', this).get(0).pause();
        $('.oc-dt-block video').prop('muted');
    }
    jQuery('#home-slider .top-left-column .section-background').insertBefore('#home-slider .top-left-column');
    jQuery('.sfm-menu a').click(function() {
        jQuery('#sfm-sidebar').removeClass('sfm-sidebar-exposed');
        jQuery('.sfm-navicon-button').removeClass('sfm-open');
        jQuery(this).parent().addClass('sfm-active-class');
        jQuery(this).parent().siblings().removeClass('sfm-active-class');
    });
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    jQuery(".sidebar-equal").css({
        'min-height': (jQuery(".equalize").height() + 'px')
    });
    jQuery('.ctct-form input[type="email"]').each(function(i, el) {
        el.placeholder = 'Email';
    });
    jQuery('.previous-user').click(function() {
        jQuery('#popuppress-3291').addClass('no-display');
        jQuery('.b-modal').addClass('no-display');
    });
    $('.being-bulldog-container').prepend('<div class="being-container-inner" style="margin-bottom:50px;"></div>');
    $('.being-bulldog-container > div, .being-bulldog-container > a').appendTo('.being-container-inner');
    $('video.slider-video').hover(function() {
        $(this).prop('controls', true);
    });
    $(".home video").prop('muted', true);
    $(".mute-video").click(function() {
        if ($(".home video").prop('muted')) {
            $(".home video").prop('muted', false);
            $(this).addClass('.unmute-video');
        } else {
            $(".home video").prop('muted', true);
            $(this).removeClass('.unmute-video');
        }
        console.log($(".home video").prop('muted'))
    });
    var figure = $(".watch-video").click(playVideo, pauseVideo);

    function playVideo(e) {
        $('.home video').get(0).play();
        $('.home video').prop('controls', false);
    }

    function pauseVideo(e) {
        $('.home video').get(0).pause();
        $('.home video').prop('controls', true);
    }
    $.fn.isOnScreen = function() {
        var win = $(window);
        var viewport = {
            top: win.scrollTop(),
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();
        var bounds = this.offset();
        bounds.bottom = bounds.top + this.outerHeight();
        return (!(viewport.bottom < bounds.top + 250 || viewport.top > bounds.bottom - 350));
    };
    if (window.location.href === 'http://www.bulldogyoga.com') {
        $(window).scroll(function() {
            if ($('#home-slider .col-8').isOnScreen() == true) {
                playVideo();
            } else if ($('#home-slider .col-8').isOnScreen() != true) {
                pauseVideo();;
            }
        });
    }

    function new_map($el) {
        var $markers = $el.find('.marker');
        var args = {
            zoom: 12,
            center: new google.maps.LatLng(0, 0),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
                elementType: 'geometry',
                stylers: [{
                    hue: '#f6e0e0'
                }, {
                    saturation: -20
                }]
            }, {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#811717'
                }]
            }, {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#ea0000'
                }]
            }, {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#ea0000'
                }, {
                    saturation: -20
                }]
            }, {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#ea0000'
                }]
            }, {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#ea0000'
                }]
            }, {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#a05050'
                }]
            }, {
                'featureType': 'poi.business',
                'elementType': 'geometry',
                'stylers': [{
                    'color': '#a05050'
                }, {
                    'visibility': 'on'
                }]
            }, {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#f1d4d4'
                }]
            }, {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#a05050'
                }]
            }, {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#f5b3b3'
                }]
            }, {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#ea0000'
                }]
            }, {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#ea0000'
                }]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#a05050"
                }, {
                    "hue": "#a05050"
                }, {
                    "visibility": "on"
                }]
            }, ],
        };
        var map = new google.maps.Map($el[0], args);
        map.markers = [];
        $markers.each(function() {
            add_marker($(this), map);
        });
        center_map(map);
        return map;
    }
    var infowindow = new google.maps.InfoWindow({
        content: ''
    });

    function add_marker($marker, map) {
        var image = 'http://res.cloudinary.com/bulldog-yoga/image/upload/v1491335714/bulldogpin_yzb4gn.png';
        var latlng = new google.maps.LatLng($marker.attr('data-lat'), $marker.attr('data-lng'));
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: image
        });
        map.markers.push(marker);
        if ($marker.html()) {
            var infowindow = new google.maps.InfoWindow({
                content: $marker.html()
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
        }
    }

    function center_map(map) {
        var bounds = new google.maps.LatLngBounds();
        $.each(map.markers, function(i, marker) {
            var latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
            bounds.extend(latlng);
        });
        if (map.markers.length == 1) {
            map.setCenter(bounds.getCenter());
            map.setZoom(19);
        } else {
            map.fitBounds(bounds);
        }
    }
    $('.a<i class="fa fa-times" aria-hidden="true"></i> cf-map').each(function() {
        map = new_map($(this));
    });
    var modal = document.getElementById('register-form');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    if (btn !== null) {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    $('#register-form').css('display', 'none');
    $('.view-schedule #myBtn').click(function() {
        $('#register-form').css('display', 'block');
    });
    $('.privacy-content .close').click(function() {
        $(this).parents('.privacy-content').slideUp();
    });
    $('.modal .close').click(function() {
        $(this).parents('.modal').css('display', 'none');
    });
    $('.policy').insertAfter('.register-bulldogyoga .wpb_raw_html .w-custom-heading');
    $('<i class="fa fa-times" aria-hidden="true"></i> ').appendTo('#register-form .modal-content .close');
    $('body').arrive('.semantic-content', function() {
        $('.semantic-content .modal-close').insertBefore('.semantic-content .modal-inner .modal-content');
    });
    $('.location-column').matchHeight();
    $('.owl-carousel').owlCarousel({
        stagePadding: 0,
        center: true,
        loop: true,
        margin: 0,
        nav: true,
        smartSpeed: 1200,
        autoplay: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        }
    })
    $('.contact-column').matchHeight();
});