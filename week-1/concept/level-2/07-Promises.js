// Promises

/*callback function has a problem called "callback hell", and to solve this problem we use promises.
In JS, a promise is a good way to handle asynchronous operations.It is used to find out if an asynchronous operation is successfully completed or not.
A promise may have one of three states.
1. Pending: The initial state of a promise(means when it is not fullfilled or nor rejected).
2. Fulfilled: The state of a promise when the operation is successfully completed.
3. Rejected: The state of a promise when the operation fails.

::To create a promise, we use the Promise() constructor::

let promise = new Promise(function(resolve, reject) {
  //do something;
});

The promise() constructor takes a function as an agrument. The function also accept two functions resolve() and reject().

If the promise returns sucessfully, the resolve() function is called.And, if an error occurs, the reject() function is called.

::Using a promise::

1. then() method - is used to handle the success of the promise, when it is fulfilled or resolved.
2. catch() method - is used to handle the error of the promise, when it is rejected or an error get occurs.
3. finally() method - is used to handle the final completion of the promise, means when promise is either resolved successfully or rejected.

NOTE: no matter what is the status of promise(it can be resovled or rejected) but finally method get called in both the cases.
*/

//example

//creation of promises (the bleow one is synchronous in nature because we have not used and async function to perfrom any aysnchronous work)
const ticket = new Promise(function (resolve, reject) {
    const isBoarded = false;
    if (isBoarded) {
      resolve("You are inside the flight");
    } else {
      reject("Your flight has been cancalled");
    }
  });
  
  //using promises
  ticket
    .then((data) => {
      //here data contain same that is written inside the resolve() function(i.e, You are inside the flight)
      console.log(data);
    })
    .catch((data) => {
      //here data contain same that is written inside the reject() function(i.e, Your flight has been cancalled)
      console.log(data);
    })
    .finally(() => {
      console.log("I am always get executed");
    });       
  
  
  //promises with asynchronous function
  
  