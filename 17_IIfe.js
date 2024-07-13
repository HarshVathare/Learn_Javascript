//IIFE means Immidatly Invoked Function Expretion

// function one(){
//    console.log("db connected..!");
// }
// one()
(function one(){
    console.log("db connected..!");
 })
 ();

 ///IIfe means => (function defination) (call)
 ( (name,age) => {
      console.log(`hello ${name} & my age is ${age} `);
 }) ("Harsh","24");


( (name)=> {
     console.log(`it is my name is ${name}`);
 })
 ("harsh")