// variaveis globais
var lista = new Array()

function registarNovoItem() {
    var txtNumero = document.getElementById('txtNumero'); 
    var listagem = document.getElementById('selLista')
    var res = document.querySelector('div#res');
    var numero = Number(txtNumero.value);
    if (txtNumero.value.length == 0) {
        window.alert('[ERRO] Preencha com um numero e tente novamente.');
    } else {
        if (lista.indexOf(Number(numero)) != -1) {
            window.alert('[ERRO] Numero ja digitado')
        } else {
            let item = document.createElement('option')
            item.text = `O numero ${numero} foi adicionado.`;

            if (numero < 0 || numero > 100) {
                window.alert('[ERRO] Preencha com um numero de 1 a 100.')
            } else {
                listagem.value = '';
                listagem.appendChild(item)
                lista.push(numero)
            }
        }
        
    }

    txtNumero.value = '';

}
menorN= 101
maiorN = 0  
function mostrarResultados() {
    if (lista.length == 0) {
        alert('[ERRO]Não é possivel finalizar sem numeros serem adicionados!')
    }else{
        for (let cont = 0; cont < lista.length; cont++) {
        
            if (lista[cont] > maiorN) {
                maiorN = lista[cont];   
            }
        }
    
        for (let cont = 0; cont < lista.length; cont++) {
       
            if (lista[cont] < menorN) {
                menorN = lista[cont]
            }
        }
    
        soma = 0
        for (let cont = 0; cont < lista.length; cont++) {
            soma = soma + lista[cont]  
        }
    
        somaMedia = 0
        for (let cont = 0; cont < lista.length; cont++) {
            somaMedia = somaMedia + lista[cont]
        }
        media = 0
        media = somaMedia / lista.length
    
    
        var div = document.getElementById('divMensagem')
        
        div.innerHTML = `A lista possui ${lista.length} elementos.`;
      
        div.innerHTML += `<br/>O maior numero é ${maiorN}.`;
    
        div.innerHTML += `<br/>O menor numero é ${menorN}.`;
    
        div.innerHTML += `<br/>A soma de todos o valores digitados é ${soma}.`;
    
        div.innerHTML += `<br/>A media dos valores digitados é ${media}.`;
    }
    
}