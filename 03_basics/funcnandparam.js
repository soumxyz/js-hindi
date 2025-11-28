// function saymyname(){
//     console.log("s");
//     console.log("o");
//     console.log("u");
//     console.log("m");
//     console.log("y");
//     console.log("a");
// }

// saymyname()

// function addtwonums(number1 , number2){
//     console.log(number1 + number2);
    
// }
// const res = addtwonums(2,3)
// console.log(res);


// function addtwonums(number1 , number2){
//     // let result = number1 + number2
//     // console.log("soumya");
//     // return result 
//     // console.log("soumya");

//     return number1 + number2
// }

// function userloginmsg(name = "sam"){
//     if(!name){
//         console.log("please enter a username");
//         return
//     }
//     return `hello ${name} you have secured a packaed of 69 LPA`
// }

// userloginmsg("soumya") // this wont give any output as we have told only to return the value no tprint the value
// console.log(userloginmsg("soumya"));
// console.log(userloginmsg(""));
// console.log(userloginmsg());


// function calculatecartprice(num1){
//     return num1
// }
// console.log(calculatecartprice(2));


// function calculatetotalcartprice(...num1){
//     return num1
// }
// console.log(calculatetotalcartprice(200,300,400));


const user = {
    name: "soumya",
    price: 200
} 

function handleobj(anyobject) {
    console.log(`usrname is ${anyobject.name} and price is ${anyobject.price}`);
}
handleobj(user);
