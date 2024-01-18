function Verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem';

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto_crianca_M.jpg');
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'foto_jovemM.jpg');
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'foto_adulto_M.jpg');
            } else {
                img.setAttribute('src', 'foto_idoso_M.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto_crianca_F.jpg');
            } else if (idade >= 10 && idade < 21) {
                img.src = 'foto_jovem_F.jpg';
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'foto_adulto_F.jpg');
            } else {
                img.setAttribute('src', 'foto_idoso_F.jpg');
            }
        } else if (fsex[2].checked) {
            genero = 'UM GAY';
            genero = "<i>" + genero + "</i>";

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto_crianca_G.jpg');
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'foto_jovem_G.jpg');
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'foto_adulto_G.jpg');
            } else {
                img.setAttribute('src', 'foto_idoso_G.jpg');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos<br>`;
        res.appendChild(img);
    }
}
