$(document).ready(function(){

    $('.js-slide-comments').owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        responsiveClass:true,
        autoHeight:true,
        responsive: {
            500:{
                items:2,
            },
            720:{
                items:3,
            },
            960:{
                items:4,
                nav: true,
                dots: false,
                autoplay:true,
                autoplayTimeout:3000,
                navText: [" ", " "]
            },
            1140:{
                items:5,
                nav: true,
                dots: false,
                autoplay:true,
                autoplayTimeout:3000,
                navText: [" ", " "]
            },
            1320:{
                items:5,
                nav: true,
                dots: false,
                autoplay:true,
                autoplayTimeout:3000,
                autoplayHoverPause:true,
                navText: [" ", " "]
            }
        }
    });
});