function Contar() {
    var fInicio = document.getElementById('txtinicio');
    var fFIm = document.getElementById('txtfim');
    var fPasso = document.getElementById('txtpasso');
    var res = document.querySelector('div#res');

    if (fInicio.value.length == 0 || fFIm.value.length == 0) {
        window.alert('[ERRO] Preencha os dados e tente novamente');
    } else {
        var passo = Number(fPasso.value) //2
        var inicio = Number(fInicio.value) //2
        var fim = Number(fFIm.value) //8
        res.innerHTML = '' 
        if (p <= 0) {
            window.alert('[ERRO] Não é possivel fazer contagem com passo valor 0, passo valera 1');
            p = 1   
        }
        if (inicio < fim){
            while (inicio <= fim) { 
                var passoFinal = inicio + passo //4,6,8
                res.innerHTML += `${passoFinal} \u{1F40C} ` //4 ,6, 8
                inicio = passoFinal //4,6,10
            }
            res.innerHTML +=`\u{1F407}`
    
        }else{
            while (inicio >= fim) { 
                var passoFinal = inicio - passo 
                res.innerHTML += `${passoFinal} \u{1F40C} `
                inicio = passoFinal
            }
            res.innerHTML +=`\u{1F407}`
    
        }
        
        res.style.textAlign = 'center';
        
        res.appendChild(img);
    }
}
