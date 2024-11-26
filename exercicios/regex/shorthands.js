const texto = '1,2,3,4,5,6,a.b c!d?e	-f_g'

console.log(texto.match(/\d/g)) // números
console.log(texto.match(/\D/g)) // não números
console.log(texto.match(/\w/g)) // caracteres [a-zA-Z0-9]
console.log(texto.match(/\W/g)) // oposto do \w
console.log(texto.match(/\s/g)) // espaço
console.log(texto.match(/\S/g)) // tudo aquilo que não é espaço