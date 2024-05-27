const name = "hetesh"
const repoCount = 50

//console.log(name + repoCount + " value");
console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('harsh-vathare-akshay-rahul-maithey')
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(9));
console.log(gameName.indexOf('v'));

const newstring = gameName.substring(0, 4)
console.log(newstring)

const anotherstr = gameName.slice(-12, 8)
console.log(anotherstr);

const newstrone = "    harsh    "
console.log(newstrone);
console.log(newstrone.trim());

const url = "https://harsh.com/harsh%20vathare"
console.log(url.replace('%20', '-'))

console.log(url.includes('harsh'))//true
console.log(url.includes('raju'))//false


//split function use to string
console.log(gameName.split('-'))

console.log("      harsh");