window.onload = () => {

    setTimeout(() => {
        document.querySelector('.plug').classList.remove('on')
        document.querySelector('.plug').style.display = 'none'
    },500)
}

document.querySelector('.plug').classList.add('on')