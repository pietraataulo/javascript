let a = document.getElementById('numa')
let b = document.getElementById('numb')
let c = document.getElementById('numc')
let res = document.getElementById('res')

function calcular() {
    if (a.value.length == 0 || b.value.length == 0 || c.value.length == 0) {
        window.alert('Preencha todos os campos.')
    } else {
        let v = Number(a.value) * Number(b.value) * Number(c.value)
        let vc = v * 1000000
        res.innerHTML = `<p>O volume da caixa é ${v}m³.</p>`
        res.innerHTML += `<p>O volume da caixa em centímetros cúbicos é ${vc}.</p>`
    }
}