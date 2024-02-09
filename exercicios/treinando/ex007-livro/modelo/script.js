let num = document.getElementById('notas')
let res = document.getElementById('res')
let tabela = document.getElementById('tabela')
let media = []

function adicionar() {
    if (num.value.length == 0 || num.value < 0) {
        window.alert('Valor inválido. Digite novamente')
    } else {
        media.push(Number(num.value))
        tabela.innerHTML += `<p>Nota ${num.value} adicionada.</p>`
        
    }
    num.value = ''
    num.focus()
}

function calcular() {
    let contar = 0
     let soma = 0
    while (contar <= 4) {
        for (let pos in media) {
           soma += media[pos]
           contar++
        }
    }
    
    res.innerHTML = `A média das 4 primeiras notas é ${soma / 4}.`
    
    let median = soma / 4
    if (median >= 5) {
        res.innerHTML += '<p>Aprovado</p>'
    } else {
        res.innerHTML += '<p>Reprovado</p>'
    }
}