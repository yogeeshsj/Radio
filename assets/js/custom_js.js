"use strict"; // Start of use strict
console.time("--== Custom JS File ==--");
// Functions definitions
//======================

function formValidation() {
    // Single Post Form
    $("#comment-form").length && $("#comment-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: "Please type a e-mail address.",
                email: "This is not a valid email address."
            }
        }
    });
    // Contact Homepage Form
    $("#contact-form").length && $("#contact-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: "Please type a e-mail address.",
                email: "This is not a valid email address."
            }
        }
    });
}

function instagramGallery() {
    // Instagram Footer
    if ($("#footer-insta").length) {
        var a = new Instafeed({
            get: "user",
            userId: "3013976721", // your user id here
            accessToken: "3013976721.14e148f.c89002a243444fb1b7a1839aa0125047", // your acces token here
            sortBy: "most-liked",
            template: '<li class="bordered small-border hover-effect"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a></li>',
            target: "footer-insta",
            limit: 3,
            resolution: "low_resolution"
        });
        a.run()
    }
    // Instagram Biography Page
    if ($("#biography-insta").length) {
        var a = new Instafeed({
            get: "user",
            userId: "3013976721", // your user id here
            accessToken: "3013976721.14e148f.c89002a243444fb1b7a1839aa0125047", // your acces token here
            sortBy: "most-liked",
            template: '<li class="bordered hover-effect"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a></li>',
            target: "biography-insta",
            limit: 8,
            resolution: "low_resolution"
        });
        a.run()
    }
}

function twitterActivator() {
    // Twitter Footer Feed
    function b(a) {
        for (var b = a.length, c = 0, d = document.getElementById("twitter-feed"), e = "<ul>"; c < b;) e += '<li class="clearfix"><div>' + a[c] + "<div></li>", c++;
        e += "</ul>", d.innerHTML = e
    }
    var a = {
        id: "722835766359957504",
        domId: "twitter-feed",
        dateOnly: true,
        maxTweets: 2,
        enableLinks: true,
        showUser: false,
        showTime: true,
        showInteraction: false,
        customCallback: b
    };
    $("#twitter-feed").length && twitterFetcher.fetch(a)
}

function qtyButton() {
    // Single Product Quantity Button 
    $(".qtybutton").on("click", function() {
        var a = $(this),
            b = a.parent().find("input").val();
        if (a.hasClass("inc")) var c = parseFloat(b) + 1;
        else if (b > 0) var c = parseFloat(b) - 1;
        else c = 0;
        a.parent().find("input").val(c)
    })
}

function radioTimelineCarousel() {
    // Radio Timeline Carousel Settings
    $(".radio-shows-slider").each(function() {
        $(this).owlCarousel({
            items: 3,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2
                },
                992: {
                    items: 3
                }
            },
            dots: false,
            nav: true,
            margin: 30
        })
    })
}

function nivoLightboxActivator() {
    // Nivo LightBox Activator
    $(".nivo-trigger").length && $(".nivo-trigger").nivoLightbox({
        theme: "default",
        effect: "fadeScale"
    })
}

function smallPlayer() {
    // Create Small Player Controls
    var a = $(".home-player-wrapper-2");
    a.width() < 550 ? a.addClass("small_player") : a.removeClass("small_player")
}

function customPlayerFunctionality() {
    // Play/Pause Button bottom right
    var a = $("#pause-player"),
        b = $("#jp_container_1"),
        c = $("#jquery_jplayer_1");
    b.length && (a.addClass("player_exists"), a.on("click", function() {
        var a = $(this).data("clicked");
        b.hasClass("jp-state-playing") ? (c.jPlayer("pause"), $(this).removeClass("is_playing")) : (c.jPlayer("play"), $(this).addClass("is_playing")), $(this).data("clicked", !a)
    }), $("#jp_container_1 .jp-next, #jp_container_1 .jp-previous").on("click", function() {
        a.addClass("is_playing")
    }), $("#jp_container_1 .jp-play").on("click", function() {
        a.toggleClass("is_playing")
    }));
    // Player Volume
    $("#home-p-mute").on({
        mouseenter: function() {
            $("#home-p-volume-bar").addClass("open-volume-bar")
        }
    }), $("#home-p-volume-bar").on({
        mouseleave: function() {
            $(this).removeClass("open-volume-bar")
        }
    }); 
    // Playlist Toggle Button
    $("#playlist-toggle").on("click", function() {
        $(this).toggleClass("toggled"), $(this).parent().parent().parent().parent().find("#main-player-playlist").slideToggle()
    })
}

function navbarButtons() {
    // Navigation Bar Buttons
    var a = $("#mini-cart-widget"),
        b = $("#mini-cart-toggle"),
        c = $("#search-toggle"),
        d = $("#menu-toggle");
    b.on("click", function() {
        $(this).toggleClass("toggled"), c.add(d).removeClass("toggled"), a.toggleClass("open"), $("#site-navigation, #search-header").removeClass("open")
    }), c.on("click", function() {
        $(this).toggleClass("toggled"), b.add(d).removeClass("toggled"), $("#search-header").toggleClass("open"), $("#site-navigation").add(a).removeClass("open")
    }), d.on("click", function() {
        $(this).toggleClass("toggled"), b.add(c).removeClass("toggled"), $("#site-navigation").toggleClass("open"), $("#search-header").add(a).removeClass("open")
    })
}

function masonryActivator() {
    // Masonry Activator
    var a = $(".masonry_wrapper");
    a.length && a.imagesLoaded(function() {
        a.masonry({
            columnWidth: 0,
            gutter: 0,
            percentPosition: true,
            originTop: true
        })
    })
}

function filterIsotope() {
    // Isotope Activator
    var a = $(".filterable-content");
    a.length > 0 && a.isotope(), $("#filter").length && $("#filter").on("click", "li", function() {
        $("li.selected").removeClass("selected"), $(this).addClass("selected");
        var a = $(this).attr("data-filter");
        $(".filterable-content").isotope({
            filter: a
        })
    })
}

function showBackToTop() {
    // Show BackToTop and Player buttons on bottom right
    $(window).scrollTop() > 450 ? $("#back-to-top, #pause-player.player_exists").css({
        bottom: "-1px"
    }) : $("#back-to-top, #pause-player.player_exists").css({
        bottom: "-40px"
    })
}

function clickBackToTop() {
    // BackToTop Animation
    $("#back-to-top").on("click", function() {
        return $("html, body").animate({
            scrollTop: 0
        }, "slow"), false
    })
}

// Functions to run while Document Ready event
jQuery(document).on("ready", function() {
    console.time("== Ready Inner Execution ==");
    ! function(a) {
        console.time("== 1 =="),
        formValidation(),
        console.timeEnd("== 1 =="),
        console.time("== 2 =="),
        instagramGallery(), 
        console.timeEnd("== 2 =="),
        console.time("== 3 =="),
        twitterActivator(), 
        console.timeEnd("== 3 =="),
        console.time("== 4 =="),
        qtyButton(),
        console.timeEnd("== 4 =="),
        console.time("== 5 =="),
        radioTimelineCarousel(),
        console.timeEnd("== 5 =="),
        console.time("== 6 =="), 
        nivoLightboxActivator(),
        console.timeEnd("== 6 =="),
        console.time("== 7 =="),
        customPlayerFunctionality(),
        console.timeEnd("== 7 =="),
        console.time("== 8 =="),
        navbarButtons(), 
        console.timeEnd("== 8 =="),
        console.time("== 9 =="),
        masonryActivator(), 
        console.timeEnd("== 9 =="),
        console.time("== 10 =="),
        clickBackToTop(),
        console.timeEnd("== 10 =="),
        console.time("== 11 =="),
        smallPlayer(),
        console.timeEnd("== 11 ==")
    }(jQuery)
    console.timeEnd("== Ready Inner Execution ==");
}); 

// Functions to run while Document Load event
jQuery(window).on("load", function() {
    ! function(a) {
        filterIsotope()
    }(jQuery)
});

// Functions to run while Document Resize event
jQuery(window).on("resize", function() {
    ! function(a) {
        setTimeout(function() {
            filterIsotope()
        }, 1000), smallPlayer()
    }(jQuery)
});

// Functions to run while Window Scroll event
jQuery(window).on("scroll", function() {
    ! function(a) {
        showBackToTop()
    }(jQuery)
});
console.timeEnd("--== Custom JS File ==--");



