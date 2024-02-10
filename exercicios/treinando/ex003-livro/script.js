let num = document.getElementById('txtn1')
let res = document.getElementById('res')
let add = document.getElementById('adicionado')
let arr = []

function adicionar() {
    if (arr.length < 2) {
        arr.push(num.value)
        add.innerHTML += `<p>Valor ${num.value} adicionado</p>`
    } else {
        window.alert('Apenas 2 valores permitidos.')
    }
    num.value = ''
    num.focus()
}

function calcular() {
    if (arr.length < 2) {
        window.alert('Adicione valores.')
    } else {
        res.innerHTML = `A diferença entre ${arr[0]} e ${arr[1]} é ${arr[0] - arr[1]}`
    }
}