const scor =200
if( scor <=300){
    console.log("less then");
}
else{
    console.log("more then");
}

let moths = 6
switch ( moths) {
    case 1:
        console.log("janewari");
        break;
    case 2:
        console.log("febrwari");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("jun");
        break;

    default:
        console.log("Invalid no..!");
        break;
}

let userloged = true
let debitcard = true

if(userloged && debitcard){
    console.log("allow to buy cource..!");
}
else{
    console.log("Not allowed");
}

let userlogedin = true
let debitcardin = false

if(userlogedin || debitcardin){
    console.log("allow to buy cource..!");
}
else{
    console.log("Not allowed");
}

const useremail = "Harsh@gmail.com"
if(useremail){
    console.log(`Got user email : ${useremail}`);
    //console.log(useremail);
}
else{
    console.log("Don't have user email");
}

let arr = ["sam"]
if(arr.length === 0){
    console.log(`array not empty : ${arr}`);
    //console.log(arr);
}
else{
    console.log(`array not empty : ${arr}`);
}

let myobject = {}
if(Object.keys(myobject).length === 0){
    console.log("array not empty ");
}
else{
    console.log("objec is not empty.!");
}

///******* Nullish Operators ************ */
let num;
//num = 5 ?? 10;
//num = null ?? 10;
num = undefined ?? 10;
num = null ?? 50 ?? 100;
console.log(num);

//********Ternory Operator *********** */

//Releted to If else statements => ? :

let num1 = 10

num1 ? console.log("valus is 10..!") : console.log("unkonwn numbers ..!");
