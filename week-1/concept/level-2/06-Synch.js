//Synchronous and Asynchronous functions

/*
What does synchronous means ?

one after the other, sequntial
only one thing is happening at a time.

What does Asynchronous means ?

Opposite of synchronous, means things are happening parallely some how.
Multiple things are context switching with each other.

Exaple : Human brain and body is single threaded (cooking maggi)
         1. we can only do one thing at a time.
         2. But we can context switch b/w tasks, or we can delegate tasks to other people.
similarly, Javascript is single threaded but it can also do context switch and can delegate the task to other processes.

IMPORTANT : Net amount of time take to do a task can be decreased by doing these two things(delegating and context switching),
            and using Asynchronous function in JS we can do the same in javascript also. 

*/ 

//introducing an asynchronous function 

//NOTE : Usually all async functions you will write will be on top of JS provided async functions like "fetch()", "setTimeout" or "fs.readFile".

// some common async functions provided by JS
// 1. setTimeout - execute some task after a given time period.
// 2. fs.readFile - to reading a file from your filesystem, for example, if i am using node.js(means running javascript file locally) then our JS file can read other files also like txt file, mp4 file, JSON file.
// 3. Fetch - to fetch some data from an API endpoint (will try this)

// 1. setTimeout

//syntax: setTimeout(callback(), time(millisecond));
//Note : callback() function make more sense in asynchronous function.


function findSum(n){
    let ans = 0;
    for(let i=0; i<n; i++){
        ans += i;
    }
    
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

setTimeout(findSumTill100, 1000); //asynchronous function (delegating the task for 1second and will execute the below code till the 1second is not completed.)
console.log("Hello World");

//output
// Hello World
// 4950  (it will get printed after 1second)



// 2. fs.readFile

const fs = require("fs");
//fs - filesystem module

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})

console.log("Hi There");

//output
// Hi There
// example of asynchronous function  (because fs.readfile is an asynchronous function so it will delegate the read file task and print the below code)



// 3. fetch() function

// synchrounous programming
let a = 10;
let b = 20;
let c = a + b;

function getData() {
  let result = fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(result);
}

getData();
console.log(c);

// Asynchrounous programming / Asynchrounous function
let a1 = 10;
let b1 = 20;
let c1 = a1 + b1;

async function getData() {
  let result = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(result);
}

getData();
console.log(c1);