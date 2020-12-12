//.filter skapar ett nytt array från ett gammalt array
//som har filtrerats enligt en funktion

let arr = ['ABCDE', 'ABCD', 'ABCDEFG', 'ABC']

console.log(arr.filter(x => x.length > 4)) //exkluderar de som inte är längre än fyra