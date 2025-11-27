const tinder = new Object() //singleton object
// const tinder = {} // non singlton object
// console.log(tinder);

tinder.id = "123abc"
tinder.name = "sam"
tinder.isloggedin = true

// const regularuser = {
//     email: "someone@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"someone"
//         }
//     }
// }
// console.log(regularuser.fullname.userfullname.firstname);

obj1 = {1:"a" , 2:"b"}
obj2 = {3:"c" , 4:"d"}
// console.log(Object.assign({} , obj1 , obj2));
console.log({...obj1 , ...obj2});
console.log(Object.entries(tinder));
console.log(tinder.hasOwnProperty(name));
console.log(Object.keys(tinder));