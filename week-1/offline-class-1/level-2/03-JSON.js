//JSON - Javascript Object Notation (transmit data between a server and a web application)


/*
   - JSON is often used to transmit data between a server and a web application, as an alternative to XML (eXtensible Markup Language)
   - JSON solves several problems related to data interchange and communication between software systems.
   - JSON can be easily parsed by machines, making it an efficient format for data exchange between a web server and a web client. Most programming languages have libraries or built-in functions to parse and generate JSON
   - By using JSON class, we can interchange between string and object and vice-versa.  

   - Example

    {
      "firstName": "John",
      "lastName": "Doe",
      "age": 30,
      "isStudent": false,
      "address": {
        "street": "123 Main Street",
        "city": "Anytown",
        "zipCode": "12345"
      },
      "phoneNumbers": [
        {
          "type": "home",
          "number": "555-1234"
        },
        {
          "type": "work",
          "number": "555-5678"
        }
      ]
    }

- The person has a first name ("John") and a last name ("Doe").
- The person is 30 years old and is not a student (as indicated by the boolean value false for the "isStudent" key).
- The person has an address with street, city, and zip code information.
- There are two phone numbers associated with the person, one for home and one for work, each represented as objects within an array.
- This JSON structure is easy to read and understand, making it suitable for data exchange between systems or for storing configuration information. 
- It's important to note that JSON can represent more complex structures and can be adapted to different use cases. In real-world scenarios, you might 
  encounter JSON in web APIs, configuration files, or data storage formats.

*/

//Parse and stringify method

function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);


