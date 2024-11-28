const now=new Date();
console.log(now);//current date and time
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getDate());
console.log(now.getSeconds());
//convert date to string
const n=new Date(2023,11,5)
console.log(n.toDateString());
//Indian Standard Time
const india=new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'});
console.log(india);
const days=["sun","mon","tues","wed","th","fri","sat"]
const today=days[new Date().getDay()];
console.log(today);
//
console.log(new Date().toLocaleDateString('en-US',{weekday:'short'}));