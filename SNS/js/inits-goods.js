(function() {
    const hoodi = [
        {id: 1, type: 'худи', color: 'амиант', cost: 5000, folder: 'hoodi', link: 'amiant', img: [
                '/img/carousel-img/amiant/hoodi/hoodiamiant',
                '/img/carousel-img/amiant/hoodi/hoodiamiant',
            ]},
        {id: 2, type: 'худи', color: 'касторовый', cost: 4500, folder: 'hoodi', link: 'kastor', img: [
                '/img/carousel-img/kastor/hoodi/hoodikastor',
                '/img/carousel-img/kastor/hoodi/hoodikastor',
                '/img/carousel-img/kastor/hoodi/hoodikastor',
                '/img/carousel-img/kastor/hoodi/hoodikastor',
                '/img/carousel-img/kastor/hoodi/hoodikastor',
            ]},
        {id: 3, type: 'худи', color: 'гавана', cost: 5000, folder: 'hoodi', link: 'gavana', img: [
                '/img/carousel-img/gavana/hoodi/hoodigavana',
                '/img/carousel-img/gavana/hoodi/hoodigavana',
            ]},
        {id: 4, type: 'худи', color: 'конго', cost: 4500, folder: 'hoodi', link: 'kongo', img: [
                '/img/carousel-img/kongo/hoodi/hoodikongo',
                '/img/carousel-img/kongo/hoodi/hoodikongo',
                '/img/carousel-img/kongo/hoodi/hoodikongo',
                '/img/carousel-img/kongo/hoodi/hoodikongo',
                '/img/carousel-img/kongo/hoodi/hoodikongo',
                '/img/carousel-img/kongo/hoodi/hoodikongo',
            ]},
        {id: 5, type: 'худи', color: 'милори', cost: 4500, folder: 'hoodi', link: 'milory', img: [
                '/img/carousel-img/milory/hoodi/hoodimilory',
                '/img/carousel-img/milory/hoodi/hoodimilory',
                '/img/carousel-img/milory/hoodi/hoodimilory',
                '/img/carousel-img/milory/hoodi/hoodimilory',
                '/img/carousel-img/milory/hoodi/hoodimilory',
            ]},
        {id: 6, type: 'худи', color: 'маренго', cost: 4500, folder: 'hoodi', link: 'marengo', img: [
                '/img/carousel-img/marengo/hoodi/hoodimarengo',
                '/img/carousel-img/marengo/hoodi/hoodimarengo',
            ]},
        {id: 7, type: 'худи', color: 'офитовый', cost: 4500, folder: 'hoodi', link: 'ofit', img: [
                '/img/carousel-img/ofit/hoodi/hoodiofit',
                '/img/carousel-img/ofit/hoodi/hoodiofit',
                '/img/carousel-img/ofit/hoodi/hoodiofit',
            ]},
        {id: 8, type: 'худи', color: 'орлеановый', cost: 4500, folder: 'hoodi', link: 'orlean', img: [
                '/img/carousel-img/orlean/hoodi/hoodiorlean',
                '/img/carousel-img/orlean/hoodi/hoodiorlean',
                '/img/carousel-img/orlean/hoodi/hoodiorlean',
                '/img/carousel-img/orlean/hoodi/hoodiorlean',
                '/img/carousel-img/orlean/hoodi/hoodiorlean',
            ]},
        {id: 9, type: 'худи', color: 'прюнель', cost: 4500, folder: 'hoodi', link: 'prunel', img: [
                '/img/carousel-img/prunel/hoodi/hoodiprunel',
                '/img/carousel-img/prunel/hoodi/hoodiprunel',
                '/img/carousel-img/prunel/hoodi/hoodiprunel',
                '/img/carousel-img/prunel/hoodi/hoodiprunel',
                '/img/carousel-img/prunel/hoodi/hoodiprunel',
                '/img/carousel-img/prunel/hoodi/hoodiprunel',
                '/img/carousel-img/prunel/hoodi/hoodiprunel',
                '/img/carousel-img/prunel/hoodi/hoodiprunel',
            ]},
    ]

    const sweetshots = [
        {id: 10, type: 'свитшот', color: 'маренго', cost: 4500, folder: 'sweetshot', link: 'marengo', img: [
                '/img/carousel-img/marengo/sweetshots/sweetshotmarengo',
                '/img/carousel-img/marengo/sweetshots/sweetshotmarengo',
                '/img/carousel-img/marengo/sweetshots/sweetshotmarengo',
                '/img/carousel-img/marengo/sweetshots/sweetshotmarengo',
                '/img/carousel-img/marengo/sweetshots/sweetshotmarengo',
                '/img/carousel-img/marengo/sweetshots/sweetshotmarengo',
            ]},
        {id: 11, type: 'свитшот', color: 'вайдовый', cost: 4500, folder: 'sweetshot', link: 'vide', img: [
                '/img/carousel-img/vide/sweetshots/sweetshotvide',
                '/img/carousel-img/vide/sweetshots/sweetshotvide',
                '/img/carousel-img/vide/sweetshots/sweetshotvide',
            ]},
        {id: 12, type: 'свитшот', color: 'гавана', cost: 5000, folder: 'sweetshot', link: 'gavana', img: [
                '/img/carousel-img/gavana/sweetshots/sweetshotgavana',
                '/img/carousel-img/gavana/sweetshots/sweetshotgavana',
                '/img/carousel-img/gavana/sweetshots/sweetshotgavana',
                '/img/carousel-img/gavana/sweetshots/sweetshotgavana',
            ]},
        {id: 13, type: 'свитшот', color: 'орлеановый', cost: 4500, folder: 'sweetshot', link: 'orlean', img: [
                '/img/carousel-img/orlean/sweetshots/sweetshotorlean',
                '/img/carousel-img/orlean/sweetshots/sweetshotorlean',
                '/img/carousel-img/orlean/sweetshots/sweetshotorlean',
                '/img/carousel-img/orlean/sweetshots/sweetshotorlean',
            ]},
    ]

    const longsliv = [
        {id: 14, type: 'лонгслив', color: 'амиант', cost: 5000, folder: 'longsliv', link: 'amiant', img: [
                '/img/carousel-img/amiant/longsliv/longslivamiant',
                '/img/carousel-img/amiant/longsliv/longslivamiant',
                '/img/carousel-img/amiant/longsliv/longslivamiant',
            ]},
        {id: 15, type: 'лонгслив', color: 'аврора', cost: 4500, folder: 'longsliv', link: 'avrora', img: [
                '/img/carousel-img/avrora/longsliv/longslivavrora',
                '/img/carousel-img/avrora/longsliv/longslivavrora',
                '/img/carousel-img/avrora/longsliv/longslivavrora',
                '/img/carousel-img/avrora/longsliv/longslivavrora',
                '/img/carousel-img/avrora/longsliv/longslivavrora',
                '/img/carousel-img/avrora/longsliv/longslivavrora',
                '/img/carousel-img/avrora/longsliv/longslivavrora',
            ]},
        {id: 16, type: 'лонгслив', color: 'конго', cost: 4500, folder: 'longsliv', link: 'kongo', img: [
                '/img/carousel-img/kongo/longsliv/longslivkongo',
                '/img/carousel-img/kongo/longsliv/longslivkongo',
                '/img/carousel-img/kongo/longsliv/longslivkongo',
            ]},
        {id: 17, type: 'лонгслив', color: 'маренго', cost: 4500, folder: 'longsliv', link: 'marengo', img: [
                '/img/carousel-img/marengo/longsliv/longslivmarengo',
                '/img/carousel-img/marengo/longsliv/longslivmarengo',
                '/img/carousel-img/marengo/longsliv/longslivmarengo',
                '/img/carousel-img/marengo/longsliv/longslivmarengo',
                '/img/carousel-img/marengo/longsliv/longslivmarengo',
            ]},
        {id: 18, type: 'лонгслив', color: 'вайдовый', cost: 4500, folder: 'longsliv', link: 'vide', img: [
                '/img/carousel-img/vide/longsliv/longslivvide',
                '/img/carousel-img/vide/longsliv/longslivvide',
                '/img/carousel-img/vide/longsliv/longslivvide',
            ]},

    ]

    const joggers = [
        {id: 19, type: 'джоггеры', color: 'амиант', cost: 5000, folder: 'joggers', link: 'amiant', img: [
                '/img/carousel-img/amiant/joggers/joggersamiant',
                '/img/carousel-img/amiant/joggers/joggersamiant',
                '/img/carousel-img/amiant/joggers/joggersamiant',
                '/img/carousel-img/amiant/joggers/joggersamiant',
            ]},
        {id: 20, type: 'джоггеры', color: 'гавана', cost: 5000, folder: 'joggers', link: 'gavana', img: [
                '/img/carousel-img/gavana/joggers/joggersgavana',
                '/img/carousel-img/gavana/joggers/joggersgavana',
                '/img/carousel-img/gavana/joggers/joggersgavana',
                '/img/carousel-img/gavana/joggers/joggersgavana',
            ]},
        {id: 21, type: 'джоггеры', color: 'конго', cost: 5000, folder: 'joggers', link: 'kongo', img: [
                '/img/carousel-img/kongo/joggers/joggerskongo',
                '/img/carousel-img/kongo/joggers/joggerskongo',
                '/img/carousel-img/kongo/joggers/joggerskongo',
                '/img/carousel-img/kongo/joggers/joggerskongo',
            ]},
        {id: 22, type: 'джоггеры', color: 'милори', cost: 5000, folder: 'joggers', link: 'milory', img: [
                '/img/carousel-img/milory/joggers/joggersmilory',
                '/img/carousel-img/milory/joggers/joggersmilory',
                '/img/carousel-img/milory/joggers/joggersmilory',
                '/img/carousel-img/milory/joggers/joggersmilory',
                '/img/carousel-img/milory/joggers/joggersmilory',
            ]},
        {id: 23, type: 'джоггеры', color: 'офит', cost: 5000, folder: 'joggers', link: 'ofit', img: [
                '/img/carousel-img/ofit/joggers/joggersofit',
                '/img/carousel-img/ofit/joggers/joggersofit',
                '/img/carousel-img/ofit/joggers/joggersofit',
                '/img/carousel-img/ofit/joggers/joggersofit',
                '/img/carousel-img/ofit/joggers/joggersofit',
                '/img/carousel-img/ofit/joggers/joggersofit',
            ]},
        {id: 24, type: 'джоггеры', color: 'орлеан', cost: 5000, folder: 'joggers', link: 'orlean', img: [
                '/img/carousel-img/orlean/joggers/joggersorlean',
            ]},
        {id: 25, type: 'джоггеры', color: 'прюнель', cost: 5000, folder: 'joggers', link: 'prunel', img: [
                '/img/carousel-img/prunel/joggers/joggersprunel',
                '/img/carousel-img/prunel/joggers/joggersprunel',
            ]},
    ]

    const trousers = [
        {id: 26, type: 'брюки', color: 'амиант', cost: 5000, folder: 'trousers', link: 'amiant', img: [
                '/img/carousel-img/amiant/trousers/trousersamiant',
                '/img/carousel-img/amiant/trousers/trousersamiant',
                '/img/carousel-img/amiant/trousers/trousersamiant',
            ]},
        {id: 27, type: 'брюки', color: 'гавана', cost: 5000, folder: 'trousers', link: 'gavana', img: [
                '/img/carousel-img/gavana/trousers/trousersgavana',
                '/img/carousel-img/gavana/trousers/trousersgavana',
                '/img/carousel-img/gavana/trousers/trousersgavana',
                '/img/carousel-img/gavana/trousers/trousersgavana',
                '/img/carousel-img/gavana/trousers/trousersgavana',
            ]},
        {id: 28, type: 'брюки', color: 'кастор', cost: 5000, folder: 'trousers', link: 'kastor', img: [
                '/img/carousel-img/kastor/trousers/trouserskastor',
                '/img/carousel-img/kastor/trousers/trouserskastor',
                '/img/carousel-img/kastor/trousers/trouserskastor',
                '/img/carousel-img/kastor/trousers/trouserskastor',
                '/img/carousel-img/kastor/trousers/trouserskastor',
                '/img/carousel-img/kastor/trousers/trouserskastor',
            ]},
        {id: 29, type: 'брюки', color: 'маренго', cost: 5000, folder: 'trousers', link: 'marengo', img: [
                '/img/carousel-img/marengo/trousers/trousersmarengo',
                '/img/carousel-img/marengo/trousers/trousersmarengo',
            ]},
        {id: 30, type: 'брюки', color: 'офит', cost: 5000, folder: 'trousers', link: 'ofit', img: [
                '/img/carousel-img/ofit/trousers/trousersofit',
                '/img/carousel-img/ofit/trousers/trousersofit',
                '/img/carousel-img/ofit/trousers/trousersofit',
            ]},
        {id: 30, type: 'брюки', color: 'орлеан', cost: 5000, folder: 'trousers', link: 'orlean', img: [
                '/img/carousel-img/orlean/trousers/trousersorlean',
                '/img/carousel-img/orlean/trousers/trousersorlean',
                '/img/carousel-img/orlean/trousers/trousersorlean',
            ]},
        ]

    const toHTML = unit =>
        `
       <li class="product__item">

        <!--    слайдер предпрсмотра карточки-->
            <div class="slider-product">
        
                <div class="slider-product__images">
        
                    <div class="swiper-container slider-product-swiper-${unit.link}">
                        <div class="slider-product__arrows">
                            <div class="slider-product__arrow slider-product__arrow--prev"></div>
                            <div class="slider-product__arrow slider-product__arrow--next"></div>
                        </div>
                        <ul class="slider__list  list-reset js-slider-cards swiper-wrapper"></ul>
                    </div>
                </div>
            </div>
            <div class="product__color-content product__color-content--${unit.link}">
                <div class="product__name-color js-product-type">${unit.type} ${unit.color}</div>
            </div>
        
            <div class="product__type-cost">
                <div class="product__price js-product-price">${unit.cost} <span>₽</span></div>
            </div>
            <div class="btn">
                <button class="btn__buy btn__buy--double btn__buy--gray js-buy-btn">в корзину</button>
                <a href="/card-${unit.folder}-${unit.link}.html" class="btn__more btn__buy--gray btn__more--${unit.link}">о товаре</a>
            </div>
        </li>
    `
    const hoodiContainer = document.getElementById('hoodi')
    const sweetshotsContainer = document.getElementById('sweetshots')
    const longslivContainer = document.getElementById('longsliv')
    const joggersContainer = document.getElementById('joggers')
    const trousersContainer = document.getElementById('trousers')

    if (hoodiContainer) {
        render(hoodi)
    }
    if (sweetshotsContainer) {
        render(sweetshots)
    }
    if (longslivContainer) {
        render(longsliv)
    }
    if (joggersContainer) {
        render(joggers)
    }
    if (trousersContainer) {
        render(trousers)
    }


    function render(type) {

        const initProduct = type.map(init => {
            return toHTML(init)
        }).join('')

        if (hoodiContainer) {
            hoodiContainer.innerHTML = initProduct
        }
        if (sweetshotsContainer) {
            sweetshotsContainer.innerHTML = initProduct
        }
        if (longslivContainer) {
            longslivContainer.innerHTML = initProduct
        }
        if (joggersContainer) {
            joggersContainer.innerHTML = initProduct
        }
        if (trousersContainer) {
            trousersContainer.innerHTML = initProduct
        }
        const slideImagesContainer = document.querySelectorAll('.js-slider-cards')
        const countProductCards = document.querySelector('.js-product-list')

        for (let k = 0; k < countProductCards.children.length; k++) {
            const imgFromArray = type.map(img => img.img)
            let imagesInSlider = ''
            for (let i = 0; i < imgFromArray[k].length; i++) {
                imagesInSlider += `
            <li class="slider-product swiper-slide js-product-image">
                <picture>
                    <source srcset="${imgFromArray[k][i]}${[i + 1]}.webp" type="image/webp">
                    <img src="${imgFromArray[k][i]}${[i + 1]}.jpg" alt="в одежде SNS" class="slider-product__img">
                </picture>
            </li>
        `
            }
            slideImagesContainer[k].innerHTML = imagesInSlider
        }
    }
})()