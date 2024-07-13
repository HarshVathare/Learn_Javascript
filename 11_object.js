//this is the object to the javascript
//Object.create
const mysym = Symbol("key1")

const myobj = {
    name     : "harsh vathare",
    age      : 22,
    [mysym]    : "Rahul Gat",
    mob_no   : 7972187168,
    Email_Id : "harsh1234vahare@gmail.com",
    addres   : "Ramnager Rendal",
    logedin  : false,
    succeslogged :["Saterday","monday"]
}
console.log(myobj.name);
console.log(myobj.Email_Id);

const main = myobj
main.Email_Id ="rahulgat@gmail.com"
console.log(myobj.Email_Id);

// console.log(myobj.mob_no );
// const main = myobj

// main.mob_no = 9595805740
// main.Email_Id = "rahul@gmail.com"

console.log(myobj.Email_Id);

const harsh = function(){
console.log("hello world to my logic liii");
}
console.log(harsh());


