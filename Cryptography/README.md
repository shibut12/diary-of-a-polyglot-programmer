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

## Cryptographic hash function

A mathematical algorithm that maps data of different size to  a bit string of a fixed size. This is designed to be a one-way function. 

## SHA-1 (Secure hash algorithms)

A cryptographic has function that takes an input and produce a 20byte hash value knows  as message digest

## Authenticated encryption

Protects not only message's confidentiality, but also authenticity. Similar to MAC's Authenticated encryption(AE) algorithms produce an _authentication tag_ and _encrypts_ the message. In other words, a single AE algorithm offers the features of both *cipher* and a *MAC*.

### Authenticated Encryption using MACs

MACs and ciphers can be combined in one of three ways to both *encrypt* and *authenticate* a _plain text_.

* encrypt-and-MAC
* MAC-then-encrypt
* encrypt-then-MAC

Three combination differ in the order which _encryption_ is applied and _authentication tag_ is generated. However the choice of a specific MAC or cipher algorithm is unimportant as long as each is secure in its own right, and the MAC and ciper use distinct _keys_.

#### Encrypt-and-MAC

Plain text (p) is encrypted using a key (k1) to generate cipher text (c). A MAC (t) is generated from the plain text using a different key (k2). The cipher text (c) and the tag (t) are transmitted to the recipient. 
The recipient then, decrypt cipher text (c) using key (k1), and create a MAC using a different key (k2). This generated tag them compared with received tag (t) to verify authenticity of the message.

If the message or tag are tampered, then decryption will fail.

_Advantage_

MAC and Cipeher text can be created in parallel

_Disadvantage_

Even a complicated MAC can still leak information about cipher text.

#### MAC-then-Encrypt

A MAC is created from plain text (p) using a key (k1), then the MAC and plaintext is encrypted using a different key (k2) to created cipher text (c). The cipher then sent to recipient, receiver uses a key (k1) to decrypt cipher to obtain plain text(p) and MAC (t). Then using a different key (k2) receiver calculated MAC (t). This generated MAC(t) then matched with MAC in the decrypted text to validate authenticity of the message.

_Advantage_

More secure, because it hides the plain text's (p) authentication tag (t), thus preventing the tag from leaking information on plaintext.

_Disadvantage_

Receiver must decrypt the message before they can determine if they have received a corrupted cipher text.

#### Encrypt-then-MAC

A cipher text (c) is created from plain text using key (k1), then an authenticated tag(t) is generated using a MAC(k2, c). The tag (t) and the cipher text (c) are then sent to reciver. Receiver computes tag (t2) using MAC(k2, c) andf verifies the t2 equals the tag(t) received. If they are equal, plain text (p) is computed p = D(k1, c), if they are not equal plain text is discarded.

_Advantage_

1. Receiver only need to compute a MAC to detect a corrupt message
2. Attackers can't sent tag (t) and cipher text(c) to receiver to decrypt unless they have broken the MAC
3. Encrypt-then-mac is more stronger than Encrypt-and-mac & MAC-then-encrypt.