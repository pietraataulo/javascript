function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) // Value serve para pegar o valor atribuído a variável
        // Sempre testar o programa aos poucos!
        var genero = '' // Quando não há dados para guardar, apenas coloque ''
        var img = document.createElement('img') // Criando uma imagem pelo JavaScript
        img.setAttribute('id', 'foto') // Adicionando um id 'foto' na imagem, pelo JavaScript
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 13) {
               img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
               img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
               img.setAttribute('src', 'foto-adulto-m.png')
            } else {
               img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 13) {
               img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
               img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
               img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' // Centralizar em JavaScript
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // Para aparecer o conteúdo
    } 
}