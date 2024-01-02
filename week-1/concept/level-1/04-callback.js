//High Order Function and Callback

//A function that takes a function as an argument is called high order function.

// function add(a, b, cb){   //A function is called callback function, which is a parameter of another function. here cb is a callback function of add function.
//     let result = a + b;
//     cb(result);
// }

// function display(val){
//     console.log(val);
// }

// add(4,2,display);  



// A function can also return a function

function add(a, b){
    let result = a + b;

    return () => console.log(result);
}

let resultFunction = add(4,2);
resultFunction();  //because add function is returing a function then resultFunction is also a function that is accepting a function that is retuned by add function.

