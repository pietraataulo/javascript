function contar() {

var ini = document.getElementById('inicio')
var fim = document.getElementById('fim')
var pas = document.getElementById('passo')
var res = document.getElementById('res')
var i = Number(ini.value)
var f = Number(fim.value)
var p = Number(pas.value)

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        // Length: Número de caracteres
        window.alert('Verifique seus dados')

        
        
    } else {
        res.innerHTML = 'Contando: '
        
        if (i < f) {
            // Contagem crescente
            for(let c = 1; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} ` // Concatenação +=
            }
            
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
            
        }
        res.innerHTML += `\u{1F3F3}`
        
    }
    
}