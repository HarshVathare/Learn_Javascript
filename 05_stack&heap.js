//********Stack & Heaps***********
// Stack => (primitive datatype => number, null, bigint, boolian, string, undefined,symbol)
//heaps => (Non- Primitive => arrey, object, Function)

let mygithubacc = "Harshvardhanvathare"
let anatheraccount = mygithubacc
anatheraccount = "chaiwithcode"

console.log(mygithubacc);    //Harshvardhanvathare
console.log(anatheraccount); //chaiwithcode

let value = 1000
let value2 = value
value2 = 2000

console.log(value);
console.log(value2);

//Heap
let userOne = {
    email   : "harsh1234vathare@gmail.com",
    phon_no : 9595805740
}

let userTwo = userOne
userTwo.email = "rajvathare@gmail.com"
userTwo.phon_no = 7972187168
console.log(userTwo.email,userTwo.phon_no); //rajvathare@gmail.com 7972187168

console.log(userOne); //{ email: 'rajvathare@gmail.com', phon_no: 7972187168 }
console.log(userTwo); //{ email: 'rajvathare@gmail.com', phon_no: 7972187168 }

let name1 = 677
let name2= 100

