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
//const
const mynumber=22
const mystring1="22"
console.log(mynumber);
console.log(mynumber===mystring1);
console.log(typeof mynumber);
//NaN function
console.log(Number('hi'));
console.log(mynumber1.isNan('hi'));
////////////////to string() change in color indicates the string
const mynum=22;
console.log(mynum.toString());
//toPrecision9()
const myfloat=55.55;
console.log(myfloat.toPrecision(2));
//parsef
const mystring2="22.13abc"
console.log(Number.parseFloat(mystring2));
console.log(Number.parseInt(mystring2));
//MATH FUNCTION
//Math.round()
let num=5.2;
let result=Math.round(num);
console.log(result);
//Math.pow()
let base=2;
let exponent=5;
let result=Math.pow(base,exponent);
console.log(result);
//Math.floor
//it rous a number to the nearest integer
let num=8.5;
let result=Math.floor(num);
console.log(result);
//Math.sqrt
let num=81;
let result=Math.sqrt(num);
console.log(result);
//Math.ceil()
let num=7.3;
let result=Math.ceil(num);
console.log(result);

//the above code rounds up to the nearest integer
let num=7.3;
let result=Math.ceil(num);
console.log(result);
///dhdjjd
const number = prompt("Enter a number: ");

if(number % 2 == 0) {
    console.log("The number is even.");
}


else {
    console.log("The number is odd.");
}

