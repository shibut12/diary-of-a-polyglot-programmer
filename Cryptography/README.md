# Cryptography

## Terms
* Plaintext - The undisguised text
* Ciphertext - Disguised text
* Cipher / Encrypt- A Method that turns a plain text into cipher text
* Decipher / Decrypt - Converting Cipher text into plain text
## Encryption algorithms

## Authentication
Authentication is done using __Challenge__ and __Response__.

## Integrety assurance
A _message fingerprint_ also knows as __Message Authentication Code (MAC)__ ensures integrity of the message. The MAC is created by encrypting a plain text message and send it along with the message. The recipient recereate the MAC from the plain text using shared secret key. If the shared secret matches the message is authentic.

## HMAC (Hash based Message Authentication Code)
HMAC uses 2 passes for mac generation. Secret key is used to generate 2 keys (inner & outer)

1. Produce inner hash from message and inner key
2. Produce final HMAC from inner hash and outer key

## Symmetric key encryption
* Same key key is used for encrytion abd decryption
* Faster compared to public key encryption
* Key needs to be stored securely
* Key need to be transfered ina secured channel

## Public key encryption
* Data in encrypted using public key
* Data is decrypted using private key.
* How does it work? When the data is encrypted, it is encrypted in sucha way that it can be decrypted using multiple keys one of them is private key. It will take forever for a hacker to try all the possible otions. It is like a present hidden behind one of 1000 doors.
* No need to transfer key

## Cryptographic hash funtion
A mathematical algorithm that maps data of different size to  a bit string of a fixed size. This is designed to be a one-way function. 
## SHA-1
A cryptographic has function that takes an input and produce a 20byte hash value knows  as message digest