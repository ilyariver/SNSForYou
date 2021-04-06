(function() {
    const forms = document.querySelector('.form-send')

    if (!forms) { return }

    const serialize = function(form) {
        const items = form.querySelectorAll('input, textarea')
        let str = ''
        for (let i = 0; i < items.length; i++) {
            const item = items[i]
            const name = item.name
            const value = item.value
            const separator = i === 0 ? '' : '&'
            if (value) {
                str += separator + name + '=' + value
            }
        }
        return str
    }

    const formSend = (form) => {
        const data = serialize(form)
        const xhr = new XMLHttpRequest()
        const url = 'send.php'

        xhr.open('POST', url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.onload = function() {
            console.log(xhr.response)
        }

        xhr.send(data)

        openThanksMessage()
    }

    forms.addEventListener('submit', (e) => {
        e.preventDefault()
        const target = e.target

        formSend(target)
    })

    function openThanksMessage() {
        document.querySelector('.js-popup-thanks').classList.add('open')
        popupToBasketOverlay.classList.add('open')
        bodyLock()
    }

})()