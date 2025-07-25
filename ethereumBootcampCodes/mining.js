// The goal of this stage is to update the mine() fuction to create a new block with a unique identifier and add it to our blocks array.

//1.
// For the purposes of this mining exercise, our block will be an object with a single property: an id that is equal to the block height prior to it being mined.

// Update the mine() function to create a new block object with a single property: id
// Set the id property to the block height prior to the new block being added
// Push the block object into the blocks array

//2. 
// Stringify the block object using JSON.stringify
// Take the SHA256 hash of the stringified block object
// Set the resulting value to a hash property on the mined block just before mining it

//3.
// Now it's time to actually mine the block. This is where we get the work part of proof of work!
// In the mine function, prior to hashing the block, add a nonce property. This property should start at 0
// Keep changing the nonce until you find a hash that is less than the TARGET_DIFFICULTY

const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;
const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
    let transactions = [];
    while (transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
        transactions.push(mempool.pop());
    }
    const block = { id: blocks.length, transactions }
    block.nonce = 0;
    let hash;
    while (true) {
        hash = SHA256(JSON.stringify(block)).toString();
        if (BigInt(`0x${hash}`) < TARGET_DIFFICULTY) {
            break;
        }
        block.nonce++;
    }
    blocks.push({ ...block, hash });
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction,
    mine,
    mempool,
    blocks,
};