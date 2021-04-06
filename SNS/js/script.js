'use strict'

// меню бургер
const btn = document.getElementById('menu-toggle');
const lines = btn.querySelectorAll('.line');
const cls = { open: 'open', close: 'close' };
const leftMenu = document.querySelector('.js-left-menu')
const overlayHeader = document.querySelector('.header__overlay')

let btnClass = cls.open;

function creatAnimationBurger() {
    if (btn.classList.contains(cls.open)) {
        btn.classList.remove(btnClass);

        overlayHeader.style.display = 'none'
        btnClass = cls.close;
        overlayHeader.classList.remove('left-menu__overlay')

    } else if (btn.classList.contains(cls.close)) {
        btn.classList.remove(btnClass);
        btnClass = cls.open;
    }
    void btn.offsetWidth;
    btn.classList.add(btnClass);
}

btn.addEventListener('click', () => {
    leftMenu.classList.toggle('open')
    overlayHeader.style.display = 'block'

    creatAnimationBurger()
});

overlayHeader.addEventListener('click', function (e) {
    overlayHeader.style.display = 'none'
    leftMenu.classList.toggle('open')

    creatAnimationBurger()
})
// меню бургер конец



// попап при нажатии "в корзину"
const popupToBasket = document.querySelector('.js-popup-to-basket')
const popupCare = document.querySelector('.js-popup-care')
const popup = document.querySelector('#top')

const popupToBasketOverlay = document.querySelector('.js-popup-overlay')

const productsCardList = document.querySelector('.js-product-list')
const productsDescription = document.querySelector('.card-product-content')
const openThanksWindow = document.querySelector('.js-basket-form')
const thanksWindowButton = document.querySelector('.js-close-thanks')

document.addEventListener('click', openModalToBasket)
thanksWindowButton.addEventListener('click', closeThanksMessage)

// if (openThanksWindow) {
//     openThanksWindow.addEventListener('click', openThanksMessage)
// }
const popupButtonClose = document.querySelector('.js-to-close')

popupButtonClose.addEventListener('click', e => {
    popupToBasket.classList.remove('open')
    popupToBasketOverlay.classList.remove('open')
    destroyBodyLock()
})

function openModalToBasket(e) {
    const target = e.target
    if (!target.classList.contains('js-buy-btn')) { return false }
    if (target.classList.contains('js-buy-btn')) {
        target.closest('.product__item')
        popupToBasket.classList.add('open')
        popupToBasketOverlay.classList.add('open')
        bodyLock()
        productInBasket()
    }
}



function closeThanksMessage() {
    document.querySelector('.js-popup-send').classList.remove('open')
    popupToBasketOverlay.classList.remove('open')
    destroyBodyLock()
}

// блокировка контента при открытии попапа

function bodyLock() {
    // const scrollWidth = window.innerWidth - document.querySelector('.main').offsetWidth + 'px'

    document.querySelector('html').style.overflow = 'hidden'
    document.querySelector('body').style.overflowY = 'scroll'
    document.querySelector('.js-header').style.overflowY = 'scroll'
    // document.querySelector('body').style.paddingRight = scrollWidth
}

function destroyBodyLock() {
    document.querySelector('html').style.overflow = 'visible'
    document.querySelector('body').style.overflowY = 'visible'
    document.querySelector('.js-header').style.overflowY = 'visible'
}

function productInBasket() {
    document.querySelector('.js-basket').classList.add('new-product')
}





/*скрытие хедера*/

hideHeader()
function hideHeader() {
    const header = document.querySelector('.js-header')

    let count = 0

    document.addEventListener('scroll', function() {

        if (window.pageYOffset > 100) {
            header.classList.add('hide')
        }

        if (window.pageYOffset <= count) {
            header.classList.remove('hide')
        }


        count = window.pageYOffset

        // console.log(`count: ${count} и 'window.pageYOffset': ${window.pageYOffset}`)
    })
}

/*скрытие хедера конец*/


// удаление из корзины
const basketProducts = document.querySelector('.js-basket-list')
const basketIsEmpty = document.querySelector('.js-is-empty')
const total = document.querySelector('.js-total')
const quantityInits = document.querySelector('.basket-content__input')
const basketFormInput = document.querySelector('.basket-form__input')


if (basketProducts) {
    basketProducts.addEventListener('click', function (event) {
        const target = event.target

        if (target.classList.contains('js-basket-content-close')) {
            target.closest('.js-basket-item').remove()
        }
        if (!basketProducts.children.length) {
            basketIsEmpty.style.display = 'block'
            total.style.display = 'none'
        }
    })

    basketIsEmpty.style.display = 'none'

// прибавление/убавление счетчика

    basketProducts.addEventListener('click', function (event) {
        const target = event.target
        if (target.classList.contains('js-counter-plus')) {
            target.previousElementSibling.value++

        }
        if (target.classList.contains('js-counter-minus')) {
            target.nextElementSibling.value--
            if (target.nextElementSibling.value <= 0) {
                target.closest('.js-basket-item').remove()

            }
        }
        if (!basketProducts.children.length) {
            basketIsEmpty.style.display = 'block'
            total.style.display = 'none'
        }
    })
}
// прибавление/убавление счетчика конец кода





// const initToProductList = init => `
//     <li class="product__item">
//
//         <a href="/card-${init.type}-${init.imgColor}.html" class="product__link">
//             <div class="product__images">
//                 <img src="img/main/${init.type}/${init.imgColor}/${init.type}-${init.imgColor}2.jpg" alt="${init.title} ${init.color} от SNS" class="product__img-hover">
//                 <div class="product__img-main">
//                     <img src="img/main/${init.type}/${init.imgColor}/${init.type}-${init.imgColor}1.jpg" alt="${init.title} ${init.color} от SNS" class="product__img">
//                 </div>
//             </div>
//             <div class="product__color-content product__color-content--${init.imgColor}">
//                 <div class="product__name-color">${init.color}</div>
//             </div>
//             <h1 class="product__title">[${init.title}*]</h1>
//         </a>
//
//         <div class="product__cost">
//             <div class="product__price">${init.cost}<span>₽</span></div>
//             <button class="product__buy-btn product__buy-btn--blue js-btn">в корзину</button>
//         </div>
//
//     </li>
// `
//
// render()
// function render() {
//     const html = inits.map(init => initToProductList(init)).join('')
//     console.log(html)
//     if (productsList) {
//         productsList = document.querySelector('.js-product-list').innerHTML = html
//     }
// }


