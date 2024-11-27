const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteúdo</div>'

console.log(texto1.match(/<(\w+)>.*<\/\1>/g))

const texto2 = 'Lentamente é mente muito lenta.'
console.log(texto2.match(/(lenta)(mente).*\2.*\1/gi))
console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) // ?: não guarda
console.log(texto2.replace(/(lenta)(mente)/gi, '$2')) // vai substituir a palavra lentamente por mente ($2 retrovisor do grupo 2)

// retrovisores suportam uma quantidade maior que 9