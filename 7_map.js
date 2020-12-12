//.map skapar ett nytt array av ett gammalt array
//där alla element ändras av den givna funktion

let arr = [6, 7, 9, 2]

let squaredArr = arr.map(x => x*x)

console.log(arr)
console.log(squaredArr)