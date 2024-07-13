const myloop = {
    name : "harsh",
    age : 243,
    address : "ramnager Rendal",
    Email: "Harsh@gmail.com"
}

console.log(myloop.name);
for (let i = 1; i < 10; i++) {

    if(i==5){
        console.log(`valu is ${i}`);
        const element = i;
        continue;
    }
   
    console.log(i);
    
}


// //***********for table ******************* */
 for(let i=1; i<=10; i++){
    console.log();
    for(let j=1; j<=10;j++){
        console.log(i + '*' + j + '=' + i*j);
    }
 }

 let myarr = ["sam","mam","tell","swati"];
 for(let i=0; i<myarr.length; i++){
     let ele = myarr[i];
     console.log(ele);
 }
 //*****************Do while loop********** */

 let i=1;
   while(i<=10){
      let elee = i;
      console.log(elee);
      i=i+1;
   }

 //*****************Do while loop********** */
 let score=1;

 do{
     
    console.log(` value is ${score}`);
    score=score+1;
 }
 while(score<=10) 
