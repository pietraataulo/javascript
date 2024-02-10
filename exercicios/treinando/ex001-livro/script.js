let h = document.getElementById('altura')
let r = document.getElementById('raio')
let res = document.getElementById('res')

function calcular() {
    if (h.value.length == 0 || r.value.length == 0) {
        window.alert('Valor inválido')
    } else {
        let pi = 3.1415
        let vol = pi * Number(r.value) ** 2 * Number(h.value)
        res.innerHTML = `O volume do galão é ${vol}m³`
        res.innerHTML += `O volume do galão em Litros é ${parseInt(vol * 1000)}`
    }
}