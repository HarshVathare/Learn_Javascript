// const heroes = ["thor","ironman","capten america", "natasha"];
// const dc = ["flash","super-man", "batman"];
// heroes.push(dc)
// console.log(heroes);

// const mainarray = heroes.concat(dc)
// console.log(mainarray);


const arr1 = [1,2,3,4]
console.log(arr1);
const arr2 = [5,6,7,8]
console.log(arr2);

//merge two array
const arr3 = arr1.concat(arr2);
console.log(arr3);

const heroes = ["thor","ironman","capten america", "natasha"];
const dc = ["flash","super-man", "batman"];
const num = [3, 4, 5, 6, 7]

console.log(heroes);
console.log(dc);

let array2 = heroes.concat(dc)// join the array 1 and 2
console.log(array2) ;

const spred = [...heroes,...dc,...num];
console.log(spred);

const random_num = [1, 2, 3,[ 4, 5, 6], 7, [6, 7, [4, 5]]];
const many_random = random_num.flat(Infinity)
console.log(many_random);


let main = Array.isArray("Harshvathare")
console.log(Array.from("Harshvathare"));
console.log(Array.isArray("Harshvathare"));

console.log(Array.from("RamNagar"));
console.log(Array.from({name : "RamNagar"}));

let score1 = 100
let score2 = 200
 let score3 = 300
 console.log(Array.of(score1,score2,score3));