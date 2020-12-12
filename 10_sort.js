//.sort() sorterar ett array och byter plats på dess element
//default är bokstavsordning A-Z(Ö)
//med funktion kan den sortera på andra sätt

let letters = ['K', 'Z', 'L', 'O', 'A']
letters.sort()
console.log(letters)

let numbers = [7000, 90, 5, 6, 399, 8, 0, 10000000, 400] 
console.log(numbers.sort())
//denna är lite trasig, eftersom den går på första nummret. 10000000 kommer då före 90

console.log(numbers.sort((a, b) => a - b))
//denna nummersortering fungerar bättre