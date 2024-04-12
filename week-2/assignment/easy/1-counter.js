// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second. 

function calCount(count){
    count++;
    return count;
}

function counter(){
    let count = 0;
    console.log("Counter : ", calCount(count));
}

setTimeout(counter, 1000);
console.log("hello World");
