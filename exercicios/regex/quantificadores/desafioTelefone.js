const tele = '(11) 98756-1212, 98734-1234'

console.log(tele.match(/\(?\d{0,2}\)?\s?[0-9]{4,5}\-[0-9]{4}/g))