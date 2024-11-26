const email = 'joao123@gmail.com.br mariadasilva@hotmail.com'

console.log(email.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}/g))
console.log(email.match(/[\w.]+@\w+\.\w{2,4}/g))