const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46'

// para definir um quantificador usa {}

console.log(texto.match(/\d{1,2}/g))
console.log(texto.match(/[0-9]{2}/g))
console.log(texto.match(/\d{1,}/g))

console.log(texto.match(/\w{7}/g))

// no futuro...
console.log(texto.match(/\b[\wõ]{7}\b/g)) // bordas -> não traz palavras/números cortados