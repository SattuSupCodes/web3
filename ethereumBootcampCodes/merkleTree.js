//lets build a merkle tree:

//1.
//First, let's write a constructor for the MerkleTree class. This constructor will take two arguments passed in this order:
// An array of leaf nodes
// A combination function used to concatenate and hash two leaves together

class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves
        this.concat = concat
    }
    getRoot() {
       return this.concat(this.leaves[0],this.leaves[1])
        
    }
}

module.exports = MerkleTree;

//2.
//Update the getRoot function to handle merkle trees with more than two leaf nodes

class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }
    getRoot(leaves = this.leaves) {
        if (leaves.length === 1) {
            return leaves[0];
        }
        const layer = [];
        for (let i = 0; i < leaves.length; i += 2) {
            const left = leaves[i];
            const right = leaves[i + 1];
            layer.push(this.concat(left, right));
        }
        return this.getRoot(layer);
    }
}//honestlt, i cheated alot in this merkle tree building. Sorry ahahahahahaha

module.exports = MerkleTree;
