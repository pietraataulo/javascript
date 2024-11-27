const texto = 'João é calmo, mas no transito fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+/gi))

// positive lookahead

console.log(texto.match(/[\wÀ-ú]+(?=,)/gi)) // procurando uma vírgula na frente de alguma palavra do conjunto passado
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi))
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))

// negative lookahead
// procura uma expressão A que não tem a expressão B na frente da A
console.log(texto.match(/[\wÀ-ú]+(?!,)/gi))

// positive lookbehind
// procura uma expressão A que tem uma expressão B antes da A

console.log(texto.match(/[\wÀ-ú]+(?<=,)/gi))

// negative lookbehind
// procura uma expressão A que não tem uma expressão B antes da A

console.log(texto.match(/[\wÀ-ú]+(?<!,)/gi))