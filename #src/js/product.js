(function() {
    const catalog = document.querySelector('.main')

    if (!catalog) { return }
    const changeProductOrderInfo = target => {

        const productType = target.querySelector('.js-product-type').textContent
        const productCost = target.querySelector('.js-product-price').textContent
        const productImgWebP = target.querySelectorAll('.js-product-image source')[1].getAttribute('srcset')
        const productImg = target.querySelectorAll('.js-product-image img')[1].getAttribute('src')


        document.querySelector('.js-popup-order-name').textContent = productType
        document.querySelector('.popup-order__cost').textContent = productCost
        document.querySelector('.popup-order__img-content source').setAttribute('srcset', productImgWebP)
        document.querySelector('.popup-order__img').setAttribute('src', productImg)
        document.querySelector('.popup-order__img').setAttribute('alt', productType)

    }

    catalog.addEventListener('click', e => {

        const target = e.target
        const closestParent = target.closest('.product__item') || target.closest('.section-exchange')
        if (target.classList.contains('js-buy-btn')) {
            e.preventDefault()
            changeProductOrderInfo(closestParent)
        }
    })
    document.addEventListener('click', function(e) {
        const target = e.target
        if (!target.classList.contains('js-buy-btn')) { return false }
        if (target.classList.contains('js-buy-btn')) {
            target.closest('.product__item')
            popupToBasket.classList.add('open')
            popupToBasketOverlay.classList.add('open')
            bodyLock()
            productInBasket()
        }
    })

})()