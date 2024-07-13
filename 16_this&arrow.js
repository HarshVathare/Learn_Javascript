const user = {
    username : "harsh",
    price : 999,
    welcomemsg : function(){
        console.log(`${this.username} , welcome to my website..!`);
        //console.log(this);
    }
}
user.welcomemsg()
// user.username = "Sam"
// user.welcomemsg()
// console.log(this);

function chai(){
    const username = "harsh"
   console.log(this.username);
}
chai()

// let addtwo = (num1,num2) => ( num1 + num2)

// console.log(addtwo(5,7));

// let demo = (num1,num2) => ( num1 + num2) ///this is emplisit function


// console.log(demo(5,5))


console.log(myarr);

let addtwo = () => ({username : "Ramesh"})//Arrow function me object insert
console.log(addtwo(3,6));

let myarr = [3,4,5,6,4]
myarr.forEach( () => {})