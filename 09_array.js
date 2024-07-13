//*****************Array******************//

let Array = [2,4,3,6,7,8,9]
console.log(Array);//[
//     2, 4, 3, 6,
//     7, 8, 9
//   ]

let strarray = ["ram","lakhan","man","krishna"]
console.log(strarray);//[ 'ram', 'lakhan', 'man', 'krishna' ]

Array.push(11)
console.log(Array);//[
//     2, 4, 3,  6,
//     7, 8, 9, 11
//   ]

Array.pop()
console.log(Array);//[
//     2, 4, 3, 6,
//     7, 8, 9
//   ]


 console.log(Array)
 console.log(Array.includes(8));
//  console.log(Array.IndexOf(4));
 
const newarry = Array.join()
console.log(Array);
console.log(typeof newarry);

//***************************slice & splice******************* */

const arrayone = [0, 1, 2, 3, 4, 5, 6]
console.log(arrayone);   //[
                         //     2, 4, 3, 6,
                         //     7, 8, 9
                         //   ]
console.log("A " , arrayone);//A  [
                             //     0, 1, 2, 3,
                             //     4, 5, 6
                             //   ]
const slice = arrayone.slice(1,3)
console.log(slice);  // [ 1, 2 ]


//////splice//////

console.log("B " , arrayone);
const splice = arrayone.splice(1,3)
console.log(splice)

//B  [
//     0, 1, 2, 3,
//     4, 5, 6
//   ]

//   [ 1, 2, 3 ]