function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 3
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=6 && hora < 12) {
        img.src='manha.jpg'
        document.body.style.background = '#c8c078'
    }
    else if (hora >= 12 && hora < 18) {
        img.src='tarde.jpg'
        document.body.style.background = '#50463c'
    }
    else if (hora >= 18 && hora < 22) {
        img.src='noite.jpg'
        document.body.style.background = '#1a333a'
    }
    else {
        img.src='madrugada.jpg'
        document.body.style.background = '#22142b'
    }

}

