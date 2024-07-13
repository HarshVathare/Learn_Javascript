const myarr = [1,2,3,4,5,6,7,8,9,10];

let newnum = myarr.filter( (nums) => {
   return nums > 4
} )

console.log(newnum);

const harsh = []
myarr.forEach( (num) => {
    if(num > 4){
        harsh.push(num)
    }
} )
console.log(harsh);

const books = [
    { title : 'Book one', genre : 'History', publish : 1980 ,
         edition : 2002
    },

    { title : 'Book two', genre : 'science', publish : 1986 ,
        edition : 2003
    }, 

    { title : 'Book three', genre : 'Non-fiction', publish : 2000 ,
        edition : 2004
    },

    { title : 'Book four', genre : 'History', publish : 2001 ,
        edition : 2005
    },

    { title : 'Book five', genre : 'Non-fiction', publish : 1985 ,
        edition : 2006
    },

    { title : 'Book six', genre : 'History', publish : 1989 ,
        edition : 2007
    },

    { title : 'Book seven', genre : 'Non-fiction', publish : 2003 ,
        edition : 2008
    },

    { title : 'Book eight', genre : 'science', publish : 2005 ,
        edition : 2009
    }
]

let data = books.filter( (bk) => {
    return bk.genre === "History"
} )

data = books.filter( (bk) => {
    return bk.genre === "Non-fiction" && bk.publish >= 2000
} )

data = books.filter( (bk) => {
    return bk.publish >= 1985  
} )

console.log(data);


console.log("**************** Map ****************");
const myarray = [1,2,3,4,5,6,7,8,9,10];
let newdata = myarray.map( (num) => { return num +10})
                     .map( (num) => {return num * 2} )
                     .map( (num) => {return num *10} )
                     .map( (num) => { return num - 5} )
                     .filter( (num) => num > 290 )

console.log(newdata);


//that is answer is 

// [ 5, 6, 7, 8, 9, 10 ]
// [ 5, 6, 7, 8, 9, 10 ]
// [
//   { title: 'Book two', genre: 'science', publish: 1986, edition: 2003 },
//   {
//     title: 'Book three',
//     genre: 'Non-fiction',
//     publish: 2000,
//     edition: 2004
//   },
//   {
//     title: 'Book four',
//     genre: 'History',
//     publish: 2001,
//     edition: 2005
//   },
//   {
//     title: 'Book five',
//     genre: 'Non-fiction',
//     publish: 1985,
//     edition: 2006
//   },
//   { title: 'Book six', genre: 'History', publish: 1989, edition: 2007 },
//   {
//     title: 'Book seven',
//     genre: 'Non-fiction',
//     publish: 2003,
//     edition: 2008
//   },
//   {
//     title: 'Book eight',
//     genre: 'science',
//     publish: 2005,
//     edition: 2009
//   }
// ]
// **************** Map ****************
// [ 295, 315, 335, 355, 375, 395 ]
