//ParseInt - global function, it parse or convert to integer value.
//ParseFloat - global function, it parses to the float value.

function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");   //if alphabetic character are there with number but it is present after the numberic value, then only this function will work, means (explainParseInt("aoijjf42px")) this will not work 
explainParseInt("3.14");   //will return the only integer value by removing the point value.

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");
