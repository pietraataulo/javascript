let n = document.getElementById('num')
let res = document.getElementById('res')

function gerar() {
    if (n.value.length == 0) {
        window.alert('Valor inválido')

    } else if (n.value > 0) {
        res.innerHTML = `<p>Este valor já é postivo.</p>`
    } else {
        res.innerHTML = `<p>Este valor negativo foi convertido para ${parseInt(Number(n.value * -1))}.</p>`
    }
}