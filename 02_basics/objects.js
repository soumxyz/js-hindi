
const mysym = Symbol("key1")

const juser = {
    name: "soumya",
    "fullname" : "soumya sagar nayak",
    age: 22,
    [mysym]: "key1",
    location : "cuttack",
    email : "soumya@google.com",
    isloggedin: false
}
// console.log(juser.email);
// console.log(juser.fullname);
// console.log(juser["email"]); 
// console.log(juser[mysym]); 


// juser.email = "soumya@myntra.com"
// Object.freeze(juser)
// juser.email = "soumya@got.com"
// console.log(juser.email);
juser.greeting =function() {
    console.log("hello js user");
    
}
juser.greeting2 =function() {
    console.log(`hello js user,${this.name}`);
    
}
console.log(juser.greeting());
console.log(juser.greeting2());
