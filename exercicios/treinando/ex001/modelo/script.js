

function calcular() {
    let a = document.getElementById('txta')
    let b = document.getElementById('txtb')
    let c = document.getElementById('txtc')
    if (a.value.length == 0 || b.value.length == 0 || c.value.length == 0) {
        window.alert('Preencha todos os campos!')
    } else {
        res.innerHTML = `A soma dos valores ${a.value} e ${b.value} é igual a ${Number(a.value) + Number(b.value)}`

        if (Number(a.value) + Number(b.value) > Number(c.value)) {
            res.innerHTML += `<p>A soma entre ${a.value} e ${b.value} é maior que ${c.value}</p>`
        } else {
            res.innerHTML += `<p>A soma entre ${a.value} e ${b.value} é menor que ${c.value}</p>`
        }
    }
    num.value = ''
    num.focus()

}