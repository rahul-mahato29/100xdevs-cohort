// Object Methods Explanation

function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);   //return an array containing all the keys
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);  //return an array containing all the values
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);  //return an array of array, where an array contain each key and it's value into another array inside the main array.
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property"); //it check the given property is a part of object key or not, in our case we don't have any key as "property", so it will return false.
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" }); //to add new key and value (i.e newProperty : "newValue") inside the mentioned object (i.e obj, obj is ther as parameter). 
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
