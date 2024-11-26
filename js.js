var c = 5;
const d = 5;
console.log(c)
console.log(d)
var a = '1';
var b = 5;
// if else
if (a === b) {
    console.log("a is not equal to b")
}
else {
    console.log("a is not equal to b")
}
//second case switch statement
let day = 3;
let dayname;
switch (day) {
    case 1:
        dayname = "monday"
        break
    case 2:
        dayname = "tuesday"
        break
    case 3:
        dayname = "wed"
        break
}
console.log(dayname)
//prompt
const prompt = require('prompt-sync')();
const a = +prompt("enter first")
const o = prompt("enter operator")
const b = +prompt("enter second")

switch (o) {
    case "+":
        console.log(a + b)
        break;
    default:
        console.log("invalid");

}
//loops
for(i=1;i<5;i++)
{
    console.log("numer" +i);
}
//while  initialize first
let i=1;
 while(i<=9)
 {
    console.log("number" +i)
    i++
 }
 //do while
 let i=1;
  do{
    console.log("numberer"+i)
    i++
  }
  while(i<15);
//atleast one loop executes



// function 
function functionname(parameters)
{
    //code to be executed
}
//function example
function hello()
{
    console.log("hello world");
}
hello();


function greet(name)
{
    console.log("hello"+name+"!");
    console.log(`hi ${name}`);
}
greet("alice");
greet("bob");
//// function declaration
function add(a,b)
{
return a+b;
}
console.log(add(2,3));
// function expresion
const subtract=function(a,b)
{
    return a-b;

};
console.log(subtract(5,2));
// arrow fun
const multiply=(a,b)-->a*b
console.log(multiply(4,5));
//call stack
function greet()
{
    console.log("hello");
    console.log("hi");

}
function start(){
    greet();
}function initialize()
{
    start();
}initialize();
//backloop
//evet loop
console.log("start");
setTimeout(() => {
    console.log("this run after 5 seconds");
}, 5000);
console.log("end");