///*********this is the for of loop *************** */
let myarr =[1,4,2,5,6];
for (const element of myarr) {
   // console.log(element)
}

const greeting = "Hello_world";
for (const word of greeting) {
    //console.log(`Each char is : ${word}`);
}


//****************** Map Method *************** */
const map = new Map();
map.set('IN',"India");
map.set('USA',"United States");
map.set('FA',"France");
//map.set('IN',"India"); they can save only uniq value not are same...!

//console.log(map); //  Map(3) { 'IN' => 'India', 'USA' => 'United States', 'FA' => 'France' }


for (const [key,value] of map) {
    //console.log(key ,':- ',value);
}
 
const myobj = {
    'js' : "javascript",
    'c++' : "CPP",
    'py' : "Python",
    'css' : "CSS"
}

for (const key in myobj) {
    //console.log(key);
    //console.log(myobj[key]);
    console.log(`${key} is shortcut for ${myobj[key]} !`);
}//js is shortcut for javascript !
// c++ is shortcut for CPP !
// py is shortcut for Python !
// css is shortcut for CSS !

const myarray = ["c","py","java","rb","php"];

// for (const key in myarray) {
//      console.log(myarray[key]);//
// }

// myarray.forEach( function (val) {
//     console.log(val);
// } )

 myarray.forEach( (items,index,array) => {
     console.log(items,index,array);
 } )

 const longarr = [
    {
        languageName : "javascript",
        languagefilename : "js"
    },
    {
        languageName : "html",
        languagefilename : "htm"
    },
    {
        languageName : "CPP",
        languagefilename : "c++"
    },
    {
        languageName : "Cascading Style Sheet",
        languagefilename : "css"
    }   
 ]

 longarr.forEach( (items) => {
       console.log(items.languageName,' :- ',items.languagefilename);
 } )