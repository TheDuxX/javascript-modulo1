function carregar() {
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/01.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/02.png'
        document.body.style.background = '#eb987f'
    } else {
        img.src = 'imagens/03.png'
        document.body.style.background = '#4b3d61'
    }
}

