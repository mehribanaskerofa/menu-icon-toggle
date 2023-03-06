        //1)What is JavaScript used for?

// Js - static web sehifesini dinamiclesdirmek ucundur. Sehifeye 


        //2)What is the difference between let and var in JavaScript?

// var - global
var a=5
{
    var a=9
}
console.log(a)//9
//let - skop tesirlidi
let b=2
{
    let b=3
}
console.log(b)//2

        //3)How can you check if a variable is undefined in JavaScript?

if(typeof c==='undefined')

        //4)What is the difference between == and === in JavaScript?

// ==  - deyerleri yoxlayir
if(1=='1')//true
    console.log(true)
else 
    console.log(false)


// ===   - deyelri ve tipleri yoxlayir
if(1==='1')//false - number!= string
    console.log(true)
else 
    console.log(false)

        //5)How can you convert a string to a number in JavaScript?

let d="45"

parseInt(d)//ParseFloat
Number(d)
console.log(d*5)


//What is the difference between synchronous and asynchronous JavaScript code?



//7)How do you declare a constant in JavaScript?

const pi=3.14
pi=5
console.log(pi)//error