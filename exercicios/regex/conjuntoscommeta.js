const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]/g)) // dentro do conjunto, não é necessário usar o escape |

console.log(texto.match(/[+.?*$]./g))

console.log(texto.match(/[$-?]/g)) // isso é um intervalo (range)

// pode precisar de escape dentro do conjunto: - [ ] ^