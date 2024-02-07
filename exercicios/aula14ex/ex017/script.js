function calcular() {
    var num = document.getElementById('num')
    var res = document.getElementById('seltab')
    var n = Number(num.value)
    
   if (num.value.length == 0) {
    window.alert('Verifique seus dados e tente novamente!')
   } else {
    c = 1
    res.innerHTML = '' // Para limpar o resultado
     while (c <= 10) {
       

        var item = document.createElement('option') // Criando um elemento
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `res${c}` // Selecionar item
        res.appendChild(item) // Adicionando elemento filho para aparecer
        c++
        
        
     }
   } 
}