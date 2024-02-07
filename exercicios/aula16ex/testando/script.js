let num = document.getElementById('valor')
let flista = document.getElementById('lista')
let res = document.getElementById('res')

let vetor = []

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function isNumero(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, vetor)) {
       vetor.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado.`
        flista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já adicionado na lista.')
    }   
       num.value = ''
       num.focus()
}

function finalizar() {
    if (vetor.length == 0) {
        window.alert('Insira valores antes de finalizar.')
    } else {
        let tot = 0
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        for (let pos in vetor) {
            soma += vetor[pos]
            if (vetor[pos] > maior)
            maior = vetor[pos]
        if (vetor[pos] < menor)
        menor = vetor[pos]
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao total, temos ${vetor.length} valores.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        res.innerHTML += `A média dos valores é ${soma / vetor.length}.</p>`
    }
}