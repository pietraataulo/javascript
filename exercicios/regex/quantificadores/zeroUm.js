const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOO!'

const texto2 = 'There is a big fog in NYC'

// ? -> zero ou um (opcional), pode ter 1 ou nenhum caractere após o ?

const regex = /fogo?/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))