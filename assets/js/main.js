// // on scorll navbar
window.onscroll = function () {
    scrollFunction();
};
var first = true;
function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("navbar").classList.add('fixed-navbar');
    }
    else {
        document.getElementById("navbar").classList.remove('fixed-navbar');
    }
}

$(window).on("load", (function() {
    setTimeout((function() {
        $(".page-loader").fadeOut("slow"),
        $("body").removeClass("overflow-hidden")
    }
    ), 500)
}
));

// hero slider start
// var swiper = new Swiper(".heroslider", {
//     spaceBetween: 30,
//     loop: true,
//     speed: 1000,
//     effect: "fade",
//     grabCursor: true,
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// * Glight Box Video
var lightboxVideo = GLightbox({
    selector: '.glightbox1'
});

const lightbox = GLightbox();
    lightbox.on('open', () => {
    // Do something
});


$('.Testimonials').owlCarousel({
    loop: true,
    items: 16,
    margin: 15,
    nav: true,
    dots: true,
    center: false,
    freeDrag: false,
    lazyLoad: true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    smartSpeed: 1100,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
        },
        576: {
            items: 1,
            nav: false,
            dots: true,
        },
        768: {
            items: 1,
            nav: true,
            dots: false,
        },
        992: {
            items: 1.5,
            nav: true,
            dots: false,
        },
        1200: {
            items: 2,
            nav: true,
            dots: false,
        }
    },
});

$('.gallaryy').owlCarousel({
    loop: true,
    items: 16,
    margin: 10,
    nav: true,
    dots: true,
    center: false,
    freeDrag: false,
    lazyLoad: true,
    autoplay:true,
    autoplayTimeout:1700,
    autoplayHoverPause:true,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
        },
        576: {
            items: 2.5,
            nav: false,
            dots: true,
        },
        768: {
            items: 3.5,
            nav: true,
            dots: false,
        },
        992: {
            items: 4,
            nav: true,
            dots: false,
        },
        1200: {
            items: 4,
            nav: true,
            dots: false,
        }
    },
});


$('.countryCarousel').owlCarousel({
    loop: true,
    items: 16,
    margin: 10,
    nav: true,
    dots: true,
    center: false,
    freeDrag: false,
    lazyLoad: true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
        },
        450: {
            items: 1.5,
            nav: false,
            dots: true,
        },
        576: {
            items: 2,
            nav: false,
            dots: true,
        },
        768: {
            items: 2.5,
            nav: true,
            dots: false,
        },
        992: {
            items: 3,
            nav: true,
            dots: false,
        },
        1200: {
            items: 3,
            nav: true,
            dots: false,
        },
        1400: {
            items: 3,
            nav: true,
            dots: false,
        }
    },
}); 

// related blog 

$('.relatedBlog').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// active class add navbar
$(document).ready(function() {
    $(document).on('click', '.nav-item a', function (e) {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
});