const { secp256k1 } = require("ethereum-cryptography/secp256k1.js") ;
const { toHex } = require("ethereum-cryptography/utils");
const crypto = require("crypto");
const privateKey = crypto.randomBytes(32);

console.log("private key:", toHex(privateKey));
const publicKey = secp256k1.getPublicKey(privateKey);
console.log("public key: ", toHex(publicKey))
//ecdsa app snipppet of how to generate private/public key pair. This is according to 3.x version of ethereum-cryptography library.