const score = 400
console.log(score);
const balence = new Number(100)
console.log(balence);
console.log(balence.toString().length);//400
                                       // [Number: 100]
                                       // 3
console.log(typeof balence);
console.log(data);

const othernumber = 123.4343
console.log(othernumber.toFixed(2));//123.43


console.log(othernumber.toPrecision(4));//123.4 

const handred = 1000000
console.log(handred.toLocaleString());//1,000,000
console.log(handred.toLocaleString('en-IN'));//10,00,000
console.log(handred.toFixed(2))//1000000.00


let num = 20000
let num2 = num.toFixed(2)//20000.00
let num3 = num2.toLocaleString('en-IN');//20,000.00

console.log(num2);
console.log(num.toLocaleString('en-IN'))//20,000

//***************Maths*****************/

console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.7));
console.log(Math.min(4,6,5,7));
console.log(Math.max(4,6,5,7));

console.log(Math.random());
console.log(Math.floor(Math.random() * 8)+1);

let min = 10 
let max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);