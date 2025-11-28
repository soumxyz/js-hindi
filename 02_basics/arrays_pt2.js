const marvheros = ["thor","ironman","spiderman"]
const dcheros = ["flash","batman","superman"]
marvheros.push(dcheros)
console.log(marvheros);
console.log(marvheros[3][1]);

marvheros.concat(dcheros)
console.log(marvheros);

const another_array = [1,2,3,[3,4,5],4,5,[,987,98]]
const new_arr = another_array.flat(Infinity)
console.log(new_arr);
