// Hashing - Hashing is a one-way process that converts a password or any data into a fixed-size 
//           string of characters, which is typically a hash value. The primary purpose of hashing 
//           passwords before storing them in a database is to enhance security.

// How it Works :

// - When a user signs up and provides a password, the application hashes the password using a cryptographic hash function (e.g., bcrypt, SHA-256).
// - The resulting hash is a fixed-length string unique to the input, making it difficult to reverse engineer the original password.


//cryptographic hash function
const bcrypt = require('bcrypt');


//Hashing a password
const plainPassword = 'rahul123';
bcrypt.hash(plainPassword, 10, (err, hashedPass) => {
    if (err) throw err;
    console.log('Hashed Password : ', hashedPass);

    //verify a password
    bcrypt.compare(plainPassword, hashedPass, (err, result) => {
        if (err) throw err;
        console.log('Password Match : ', result);
    });
});



