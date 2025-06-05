const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [ new Block()];
       
    }
    addBlock(block){
        block.previousHash = this.chain[this.chain.length - 1 ].toHash() //adding previous hash in new block
        this.chain.push(block)
    }
}

module.exports = Blockchain;