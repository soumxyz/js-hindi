const user = {
    username: "soumya",
    price: 999,

    welcomemsg: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
        
    }
}

// user.welcomemsg()
// user.username = "hitesh"
// user.welcomemsg()
// console.log(this);


// function chai(){
//     console.log(this.username);
//     let username = "hitesh"
// }

// const chai = () => {
//     console.log(this.username);
//     let username = "hitesh"
// }
// chai()


// const addtwo = (num1,num2) => {
//     return num1 + num2
// }

// const addtwo = (num1,num2) => num1 + num2

// console.log(addtwo(4,3))


const addtwo = (num1,num2) => ({username : "soumya"})
console.log(addtwo(4,3));
