//push
//metoden lägger tll ett (eller flera) element i ett array
//kan också returna den nya längden av ett array efter elementet lagits till

const hälsningar = ['hej', 'tjena', 'godag']
let count = hälsningar.push('tjenixen') //ska lägga till 'tjenixen'
console.log(hälsningar)
console.log(count)

//pop
//metoden tar bort sista elementet av ett array 
//och returnerar det sista elementet också

let elem = hälsningar.pop() //ger elem värdet 'tjenixen' och tar bort det från 'hälsningar'
console.log(elem)
console.log(hälsningar)