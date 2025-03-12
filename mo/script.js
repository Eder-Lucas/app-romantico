const img = document.querySelector("img#gif")

document.addEventListener('DOMContentLoaded', () => {
    const btnSim = document.querySelector("button#sim")
    const btnNao = document.querySelector("button#nao")

    btnSim.addEventListener('click', () => {
        alert('te amoooo')
        img.src = "images/gif-fofinho-heart.gif"
        btnNao.style.left = ''
        btnNao.style.top = ''
    })

    btnNao.addEventListener('click', function () {
        img.src = "images/hug-me-im-sad.gif"
        img.style.height = '155px'
        const larguraTela = window.innerWidth
        const alturaTela = window.innerHeight

        const posiçãoX = Math.random() * (larguraTela - btnNao.offsetWidth)
        const posiçãoY = Math.random() * (alturaTela - btnNao.offsetHeight)

        btnNao.style.left = posiçãoX + "px"
        btnNao.style.top = posiçãoY + "px"
    })
})
