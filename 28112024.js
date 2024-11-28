//arraymethods
//push()add one or more elements to the end of an array
let array01=[1,2,3];
array01.push(4);
console.log(array01);
//pop()removes the last element from an array
let array02=[1,2,3,4];
array02.pop();
console.log(array02);
//shift()//removes the first element from an array
let array03=[1,2,3,4];
array03.shift();
console.log(array03);
//unshift()add one or more element to the starting of an array
let array04=[1,2,3];
array04.unshift(1);
console.log(array04);
//map creates a new array by applying a function to each element
let array05=[1,2,3,4,5];
let newarray=array05.map(x=>x*2);
console.log(newarray);
//filter()create a new array that passes witha  ac ondition
let array06=[1,2,3,4];
let newarray=array06.filter(x=>x%2==0);
console.log(newarray);
//for each()executes a function on each array element
let array07=[1,2,3,4];
array07.forEach(x=>console.log(x));
//find returns a value of first element that satisfies the condition
let array06=[1,2,3,4];
let newarray=array06.find(x=>x>2);
console.log(newarray);
//reduce() reduce an  array to single value by accumulating the results
let array06=[1,2,3,4];
let newarray=array06.reduce((total,num)=>total +num,0);
console.log(newarray);
//concat
let abc=[1,2];
let cba=[2,1];
let array=abc.concat(cba);
console.log(array);
//remove duplicate elements
let array=['apple','orange','jacfruit','apple','papaya'];

function removeDuplicates(array){
    return array.filter((item,index)=>array.indexOf(item)===index);

}
console.log(removeDuplicates(array));
//find unique elements
const array1=[1,2,3,3,4,5];
const uniqueArray=Array.from(new Set(array1))
console.log('original',array1);
console.log('unique',uniqueArray);

