var thumbsImage = new Swiper('.swiper-container--thumbs', {
    slidesPerView: 0,
    mousewheel: true,
    breakpoints: {
        768: {
            direction: 'vertical',
            slidesPerView: 3,
            spaceBetween: 0,
        },
        992: {
            direction: 'vertical',
            slidesPerView: 3,
        },
        1400: {
            direction: 'vertical',
            slidesPerView: 3,
            spaceBetween: 5,

        }
    },

});

var mainImage = new Swiper('.swiper-container--image', {
    loop: true,
    speed: 200,
    lazy: true,

    navigation: {
        nextEl: '.slider__button-next--next',
        prevEl: '.slider__button-next--prev',
    },
    breakpoints: {
        768: {
            direction: 'vertical',
        },
        1400: {
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
    thumbs: {
        swiper: thumbsImage,
    },
});


new Swiper(`.slider-product-swiper-amiant`, {
    // Optional parameters
    loop: true,
    speed: 500,
    lazy: true,
    navigation: {
        nextEl: '.slider-product__arrow--next',
        prevEl: '.slider-product__arrow--prev',
    },
})

new Swiper(`.slider-product-swiper-kastor`, {
    // Optional parameters
    loop: true,
    speed: 500,
    lazy: true,
    navigation: {
        nextEl: '.slider-product__arrow--next',
        prevEl: '.slider-product__arrow--prev',
    },
})
new Swiper(`.slider-product-swiper-gavana`, {
    // Optional parameters
    loop: true,
    speed: 500,
    lazy: true,
    navigation: {
        nextEl: '.slider-product__arrow--next',
        prevEl: '.slider-product__arrow--prev',
    },
})
new Swiper(`.slider-product-swiper-kongo`, {
    // Optional parameters
    loop: true,
    speed: 500,
    lazy: true,
    navigation: {
        nextEl: '.slider-product__arrow--next',
        prevEl: '.slider-product__arrow--prev',
    },
})

new Swiper(`.slider-product-swiper-milory`, {
    // Optional parameters
    loop: true,
    speed: 500,
    lazy: true,
    navigation: {
        nextEl: '.slider-product__arrow--next',
        prevEl: '.slider-product__arrow--prev',
    },
})

new Swiper(`.slider-product-swiper-marengo`, {
    // Optional parameters
    loop: true,
    speed: 500,
    lazy: true,
    navigation: {
        nextEl: '.slider-product__arrow--next',
        prevEl: '.slider-product__arrow--prev',
    },
})

new Swiper(`.slider-product-swiper-ofit`, {
    // Optional parameters
    loop: true,
    speed: 500,
    lazy: true,
    navigation: {
        nextEl: '.slider-product__arrow--next',
        prevEl: '.slider-product__arrow--prev',
    },
})

new Swiper(`.slider-product-swiper-orlean`, {
    // Optional parameters
    loop: true,
    speed: 500,
    lazy: true,
    navigation: {
        nextEl: '.slider-product__arrow--next',
        prevEl: '.slider-product__arrow--prev',
    },
})

new Swiper(`.slider-product-swiper-prunel`, {
    // Optional parameters
    loop: true,
    speed: 500,
    lazy: true,
    navigation: {
        nextEl: '.slider-product__arrow--next',
        prevEl: '.slider-product__arrow--prev',
    },
})

new Swiper(`.slider-product-swiper-vide`, {
    // Optional parameters
    loop: true,
    speed: 500,
    lazy: true,
    navigation: {
        nextEl: '.slider-product__arrow--next',
        prevEl: '.slider-product__arrow--prev',
    },
})

new Swiper(`.slider-product-swiper-avrora`, {
    // Optional parameters
    loop: true,
    speed: 500,
    lazy: true,
    navigation: {
        nextEl: '.slider-product__arrow--next',
        prevEl: '.slider-product__arrow--prev',
    },
})