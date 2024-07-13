const mynum = [1,2,3,5,7,20,10];

let newnum = mynum.reduce( function(acc,currval) {
    console.log(`acc : ${acc} and currval : ${currval}`);
       return acc + currval
},0)
console.log(newnum);

//acc : 0 and currval : 1
// acc : 1 and currval : 2
// acc : 3 and currval : 3
// acc : 6 and currval : 5
// acc : 11 and currval : 7
// acc : 18 and currval : 20
// acc : 38 and currval : 10
// 48

const arr = [1,2,3,4];
let data = arr.reduce( (acc,curr) =>  (
    //console.log(`acc : ${acc} and curr : ${curr}`)
    acc + curr),0 )
console.log(data);

const shopingcard = [
    {
        itemname : "fan",
        price    : 1650
    },
    {
        itemname : "Table",
        price    : 2650
    },
    {
        itemname : "rat",
        price    : 1850
    },
    {
        itemname : "jar",
        price    : 2650
    },
    {
        itemname : "car",
        price    : 800
    }
]

let bill = shopingcard.reduce( (acc , item) => acc + item.price,0 )
console.log(bill);

//total price is :: 9600
console.log("it is the bset..!");