//includes:
//metoden säger ifall ett array innehåller ett visst element, 
//och returnerar true om det gör det, false om inte

const nummer = [9, 8, 321, 4]

console.log(nummer.includes(321)) //borde ge true
console.log(nummer.includes(322)) //borde ge false
