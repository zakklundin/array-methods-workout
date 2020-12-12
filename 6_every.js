//every
//.every kollar om alla element i ett array stämmer överens med en funktion
//returnerar true/false

let arr = ['Hejsan', 'Tjenare', 'Heja', 'Whazzup']

console.log(arr.every(x => x.length > 3)) //Ska ge true (alla är längre än 3)
console.log(arr.every(x => x.length > 4)) //Ska ge false ('Heja' är inte längre än 4)