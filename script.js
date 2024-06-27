$(document).ready(function() {
    // Sticky navbar on scroll script
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Scroll-up button show/hide script
        if ($(this).scrollTop() > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll-up button click to scroll to top
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0}, 'slow');

        // Removing smooth scroll behavior temporarily
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll on menu items click
    $('.navbar menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });
});
// Toggle menu/navbar script
$('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

// Typing text animation script
var typed1 = new Typed(".typing", {
    strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed2 = new Typed(".typing-2", {
    strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
// Owl Carousel script
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
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
            nav: false
        }
    }
});
