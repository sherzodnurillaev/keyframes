const btns = document.querySelectorAll('.box')

btns.forEach(btn => {
    btn.onmouseenter = () => {
        btn.classList.toggle('active')
    }
})