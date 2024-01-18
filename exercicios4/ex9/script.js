function Tabuada() {
    var fNumero = document.getElementById('txtnumero'); 
    var tab = document.getElementById('seltab')
 
    var res = document.querySelector('div#res');

    if (fNumero.value.length == 0) {
        window.alert('[ERRO] Preencha com um numero e tente novamente');
    } else {
        var numero = Number(fNumero.value)
        var cont;
        for (cont = 0; cont <= 10; cont++) {
            let item = document.createElement('option')
            item.text = `${numero} X ${cont} = ${numero*cont}`
            tab.appendChild(item)
            
        }
        
    }
}
