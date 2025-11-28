// let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toDateString());
// console.log(typeof(mydate));

// let newdate = new Date(2023 , 0 , 3)
// console.log(newdate.toDateString());

let mynewdate = new Date("2023-01-14")
// console.log(mynewdate.toDateString());

let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(mynewdate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.toLocaleString('default' , {
    weekday: "long",
    
}));

