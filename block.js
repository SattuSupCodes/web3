const SHA256 = require('crypto-js/sha256');

class Block {
    
    constructor(data){
        this.data = data
    }
    toHash(data) {
        return SHA256(this.data)// a hash!
    }
}

module.exports = Block;
