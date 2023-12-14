//Class and Object

//A class is a blueprint
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }

  //static method - When we know, things which will be fixed for every Animal class(then we use static method for it).
  // this method is not associated with any object, it is associated with class. (it instanciate only once for the first call only)
  static myType(){
    console.log("Animal Type");
  }
  
  //instance method
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

//object, creating real object of the blueprint
let object1 = new Animal("Dog",4);
let object2 = new Animal("Cat",4); //using same blueprint we can create different real world object, this the benifit of the concept classes and objects.

let dog = object1.describe();
console.log(dog);
let cat = object2.describe();
console.log(cat);

//static method call
console.log(Animal.myType());


