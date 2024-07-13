//how to lock object properties
const jsusers = {
    id : 1,
    user : "harsh",
    location : "kolhapur",
    fullName : {
        username : {
            first_name : "ram kale",
            second_name : "raja"
        }
    }

}
// console.log(jsusers);
jsusers.location = "sangli"
Object.freeze(jsusers)

jsusers.location = "Maharashtra"
console.log(jsusers);

jsusers.greeting = function(){
       console.log("hello users");
}

console.log(jsusers.greeting);

jsusers.greetingtwo = function () {
    console.log(`Hello this is the usr ${this.location}`);
}
console.log(jsusers.greetingtwo);


/////////////////////*********This is singltone Objects********///////////////
const tenderuser = new Object()
console.log(tenderuser);//This is singltone Objects => '{}'

const tenderuserw = {}
console.log(tenderuserw);//This is non-singltone Objects => '{}'

tenderuser.id = "123abc"
tenderuser.user = "sammy"
tenderuser.isloggedin = false
console.log(tenderuser);//{ id: '123abc', user: 'sammy', isloggedin: false }

const regular = {
    email : "h@gmail.com",
    fullName : {
        userfullname : {
            firsname : "harsh",
            lastname : "vathare"
        }
    }
}


//***************Object used in Array************** */
const users = [
    {
        id : 1,
        email : "harsh@gmail.com"
    },

    {
        id : 2,
        email : "harsh@gmail.com"
    },

    {
        id : 3,
        email : "harsh@gmail.com"
    },

    {
        id : 4,
        email : "harsh@gmail.com"
    }
]

console.log(users[1]);



console.log(regular.fullName.userfullname);
console.log(Object.keys(tenderuser)); //[ 'id', 'user', 'isloggedin' ]
console.log(Object.values(tenderuser)); //[ '123abc', 'sammy', false ]


// **********Merging Objects **************/
const obj1 = { 1 : "a", 2:"b"}
const obj2 = { 3: "a", 4:"b"}
const obj4 = { 5: "a", 6:"b"}

const obj3 = {...obj1 , ...obj2,...obj4}// it is best to spread the properties
console.log(obj3);
//console.log(Object.assign({} ,obj1 , obj2, obj4));
// console.log(...obj1,...obj2,...obj4);

console.log(users[1]);S