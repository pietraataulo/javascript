const texto = 'Romário era um excelente jogador \n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // dentro do conjunto, ^ serve para negar, fora do conjunto significa início de linha

console.log(texto.match(/r$/gi)) // $ representa final de linha 
