// const loggedin = true
// const temp = 41
// if (temp < 50) {
//     console.log("temp less than 50");
// }else{
//     console.log("temp more than 50");
    
// }

// const score = 200
// if (score>100) {
//     var power = "fly"
//     console.log(`user power ${power}`);
    
// }
// console.log(`user power ${power}`);// this wont be executed because var declared inside the scope cant be accesed outside the scope use const and let instead

// const balance = 1000
// // if (balance>500) console.log("test");
// if (balance < 500) {
//     console.log("less than 500");
    
// }else if (balance < 750) {
//     console.log("less than 750");

// }else if (balance < 950) {
//     console.log("less than 950");

// }
// else{
//     console.log("greater than 1000");
// }

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard){
    console.log("allowed to buy course");
    
}