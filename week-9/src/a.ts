//Basic types in typescript
// const x1: number = 1;
// const x2: string = "rahul";
// const x3: boolean = true;
// const x4: null = null;
// let x5: undefined = undefined;

// console.log(x1);
// console.log(x2);
// console.log(x3);
// console.log(x4);
// console.log(x5);

//function in typescript

//example-1
// function greet(firstName: string): void {
//     console.log("Hello " + firstName);
// }

// greet("Harkirt");

//example-2
// function sum(a: number, b: number): number {
//     return a + b;
// }

// const result = sum(10, 20);
// console.log(result);

//example-3
// function isLegal(age: number) : boolean {
//     if(age > 10){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const result = isLegal(22);
// console.log(result);


//taking function as parameter
// function delayedCall(fn: () => void) {
//     setTimeout(fn, 1000);
// }

// delayedCall(() => {
//     console.log("callback function");
// })


//Interface (used for defining the structure for objects)
// Define an interface to specify the structure of a user object
// interface User {
//     firstName: string;
//     lastName: string;
//     email: string;
//     age: number;
//   }
  
  // Create a function 'isLegal' that checks if a user is above 18
//   function isLegal(user: User): boolean {
//       // Check if the user's age is greater than 18
//       if (user.age > 18) {
//           return true; // Return true if the user is legal
//       } else {
//           return false; // Return false if the user is not legal
//       }
//   }

//   const user1 = {
//     firstName: "Rahul",
//     lastName: "Mahato",
//     email: "rahul@gmail.com",
//     age: 20
//   }

//   console.log(isLegal(user1));

//types : same as interface, but it has some extra properties

//1. defining the structure of an object
type userType = {
    firstName: string
    lastName: string;
    email: string;
    age: number;
  }
  
  // Create a function 'isLegal' that checks if a user is above 18
  function isLegalType(user: userType): boolean {
      // Check if the user's age is greater than 18
      if (user.age > 18) {
          return true; // Return true if the user is legal
      } else {
          return false; // Return false if the user is not legal
      }
  }

  const user2 = {
    firstName: "Rahul",
    lastName: "Mahato",
    email: "rahul@gmail.com",
    age: 20
  }

//   console.log(isLegalType(user2));

//2. Unions
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101);     // ID: 101
printId("202");   // ID: 202

//3. Intersection

type Employee = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee & Manager;
  
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software Developer"
  };


//array
function printArray(arr: number[]): void {
    console.log(arr);
}

printArray([1,2,3,4,5]);


//checkout notion-note for the reference