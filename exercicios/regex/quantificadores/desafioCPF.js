const cpf = '555.666.789-15, 755.123.456-04, 98479874474'

console.log(cpf.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g))