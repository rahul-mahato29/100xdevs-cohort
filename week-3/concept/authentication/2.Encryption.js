//Unlike hashing, encryption is a two-way process that involves converting data into a format that can be easily reversed using a decryption key.

const crypto = require('crypto');

// Encryption
const plaintext = 'Hello, world!';
const encryptionKey = crypto.randomBytes(32); // Generate a random encryption key (32 bytes for AES-256)
const iv = crypto.randomBytes(16); // Generate a random IV (Initialization Vector) - 16 bytes for AES

const cipher = crypto.createCipheriv('aes-256-cbc', encryptionKey, iv);

let encryptedData = cipher.update(plaintext, 'utf8', 'hex');
encryptedData += cipher.final('hex');
console.log('Encrypted data:', encryptedData);

// Decryption
const decipher = crypto.createDecipheriv('aes-256-cbc', encryptionKey, iv);

let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
decryptedData += decipher.final('utf8');
console.log('Decrypted data:', decryptedData);
