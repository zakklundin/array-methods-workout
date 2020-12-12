//some
//metoden kollar om minst ett element i ett element i ett array uppfyller funktionen
//returnerar true/false

let arr = ['Hej', 'Tjenare', 'Hejsan-Svejsan', 'Whats updog']

console.log(arr.some(x => x.length === 3)) //borde ge true
console.log(arr.some(x => x.length === 4)) //borde ge false