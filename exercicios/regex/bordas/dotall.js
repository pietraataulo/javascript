const texto = 'Romário era um excelente jogador \n, mas hoje é um político questionador'


// selecionando tudo mesmo com \n (dotall)
console.log(texto.match(/^r.*r$/gi))
console.log(texto.match(/^r[\s\S]*r$/gi))