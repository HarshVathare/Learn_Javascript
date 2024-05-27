const score =100
const scorevalue = 100.3
const isloggedin = false
const outsidetemp = null
let userEmail;
console.log(typeof score);
console.log(typeof scorevalue);
console.log(typeof isloggedin);
console.log(typeof outsidetemp);

const id = Symbol('123');
console.log( id);
console.log(typeof id);

const aid = Symbol('123');
console.log( aid);
console.log(typeof aid);

console.log(id === aid);

let bignum = 567454345754343564n
console.log(bignum);
console.log(typeof bignum);

//this is the arrey code and 
// arrey , object , function =>typeof==> "object"

//array
let name = ["harsh","akshay","rahul","mahesh"];
console.log(typeof name);
console.log(name);

//object//
/*let obj = {
    name2 : "rajvathare",
    age : 34,
    city : Hupari,
}

console.log(typeof obj);*/

let fun = function(){
    console.log("hello world");
     
}
console.log(fun);
console.log(typeof fun);
 console.log(fun)

 let arrey = [2,6,4,6,67,47];
console.log(arrey);

 console.log(arrey[0]);
 console.log(arrey[1]);
 console.log(arrey[2]);
 console.log(arrey[3]);
 console.log(arrey[4]);
 console.log(arrey[5]);


 //All Outputs
 /*
number
number
boolean
object
Symbol(123)
symbol
Symbol(123)
symbol
false
567454345754343564n
bigint
object
[ 'harsh', 'akshay', 'rahul', 'mahesh' ]
[Function: fun]
function
[Function: fun]
[ 2, 6, 4, 6, 67, 47 ]
2
6
4
6
67
47
 */