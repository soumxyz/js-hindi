/* types of memory:
===> stack(primitive)     returns copy value
===>heap(non-primitive)     returns original value
*/
let myname = "soumya"
let anothername = myname
anothername = "ankit"
console.log(anothername);

console.log(anothername);

let userone = {
    name : "soumya" , 
    upi : "demo@ybl"
}

let usertwo = userone
usertwo.email = "som@gmail.com"

console.log(userone.email);
console.log(usertwo.email);

