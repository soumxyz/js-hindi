//"use strict" // treat all code as newer version of js

//alert(3+3)  we are using node js not browser so it gives error but doing same in browser will give 6

/*
number of data types:
1)number: range: 2^15
2)bigInt
3)boolean: true or false
4)null => standalone value
5)undefined
6)string
7) symbol => unique
8) object
*/

// console.log(typeof "hello") //tells about types of error
// console.log(typeof null); // type: object
// console.log(typeof undefined); //type:undefined

//datatype conversion
// let score = "33abc"
// let score = null
// let score = undefined
// console.log(typeof score);
// console.log(score);


// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber);


// string like "33" gets converted to number => 33
//but string like "33abc" doesnt get converted and gives output NaN

// let booleanloggedin = 1             //1 => true
// let booleanloggedin = 0             //0 => false
// let booleanloggedin = ""            //"" => false
// let booleanloggedin = "soumya"      //"soumya" => true
let isbooleanloggedin = Boolean(booleanloggedin)
console.log(isbooleanloggedin);
console.log(typeof isbooleanloggedin);




