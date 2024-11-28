//1.javascrip prpgram to round a given number to the nearest integer using the Math.round() function
let ab=100.56;
let result=Math.round(ab);
console.log(result);
//2.java script programme to display current date and time using the Date()object
const now=new Date();
console.log(now);//current date and time
const india=new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'});
console.log(india);
//3.javascript program to check if a given number is an integer using the Number.isInteger()function
// Function to check if the number is an integer
function isInteger(num) {
    if (Number.isInteger(num)) {
        console.log(num + " is an integer");
    } else {
        console.log(num + " is not an integer");
    }
}
isInteger('hf')
