const names = ["soumya","avijit","dinesh"]

//Arrays methods

// console.log(names[1]);
// names.push(6)
// console.log(names);
// names.pop()
// console.log(names);
// names.unshift(0)
// console.log(names);
// names.shift()
// console.log(names);

// console.log(names.includes("dinesh"));
// console.log(names.indexOf("dinesh"));

// const myarray = new Array(1,2,3,4,5)
// const mynewarr = myarray.join()
// console.log(typeof(mynewarr));

//Slice and splice

console.log("A ",names);
const myn1 = names.slice(1,2)
console.log(myn1);
console.log("B ",names);

const myn2 = names.splice(1,2)
console.log(myn2);
console.log("C ",names);
