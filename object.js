//cretion of the object
let abc={
    name:"suji",
    sal:52,
    address:"palakkad"
    

}
console.log(abc);
console.log(abc.name);
//nested object
let abc={
    name:"suji",
    sal:52,
    address:"palakkad",
    ahy:{
        street:22,
        pincode:678005
    }
    

}
console.log(abc);
console.log(abc.ahy.street);


//notations
const person = {
    firstname:"sujith",
    lastname:"juys",
    age:23
};
//dot notations
console.log(person.firstname);
//bracketnotations
console.log(person["firstname"]);
//expression
const a="firstname";
console.log(person[a]);
console.log("the last name is"+person["lastname"]);
console.log(person.firstname+'is'+person.age+'years old');

delete person.age
console.log(person.firstname+'is'+person.age+'years old');

person.nationality='UK'
console.log(person.firstname+"from"+person.nationality + ".")
//JSON.STRINGFY()
//CREATEA BASIC OBJECT
let abc={
    name:"suji",
    sal:52,
    address:"palakkad"
    

}
console.log(abc);
const jsonString=JSON.stringify(abc);
console.log(jsonString);





//constructors
function student(person,age,value,score)
{
    this.firstname=person;
    this.age=age;
    this.value=value;
    this.score=score;

}const myfriend=new student("str",18,"s",85);
console.log(myfriend);
//swapping
let a=2;
let b=4;
console.log("the value of a is"+ a +"and value of b is "+b);
console.log(`the value is ${a}and the value is ${b}`);
