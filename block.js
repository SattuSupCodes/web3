const SHA256 = require('crypto-js/sha256');

class Block {
    toHash(msg) {
        return SHA256(msg)// a hash!
    }
}

module.exports = Block;