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
            return leaves[0]; // base case: one item left, that's the root (stoppping condition for our recursion function)
        }
        const layer = [];
        for (let i = 0; i < leaves.length; i += 2) {
            const left = leaves[i];
            const right = leaves[i + 1];
            layer.push(this.concat(left, right));
        }
        return this.getRoot(layer);
    }
}//honestly, i cheated alot in this merkle tree building. Sorry ahahahahahaha

module.exports = MerkleTree;

//3.
//Your Goal: Handle Odd Number of Leaves

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
            if (right) {
                layer.push(this.concat(left, right));
            }
            else {
                layer.push(left);
            }
        }
        return this.getRoot(layer);
    }
}

module.exports = MerkleTree;

//4.
// adding getProof method
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
            if (right) {
                layer.push(this.concat(left, right));
            }
            else {
                layer.push(left);
            }
        }
        return this.getRoot(layer);
    }
    getProof(index, layer = this.leaves, proof = []) {
        if (layer.length === 1) return proof;
        const newLayer = [];
        for (let i = 0; i < layer.length; i += 2) {
            let left = layer[i];
            let right = layer[i + 1];
            if (!right) {
                newLayer.push(left);
            }
            else {
                newLayer.push(this.concat(left, right));

                if (i === index || i === index - 1) {
                    let isLeft = !(index % 2);
                    proof.push({
                        data: isLeft ? right : left,
                        left: !isLeft
                    });
                }
            }
        }
        return this.getProof(Math.floor(index / 2), newLayer, proof);
    }
}
//im being so lazy with this merkle tree sheesh
module.exports = MerkleTree;

//5.
//verifying proof
function verifyProof(proof, node, root, concat) {
    let data = node;
    for (let i = 0; i < proof.length; i++) {
        if (proof[i].left) {
            data = concat(proof[i].data, data);
        }
        else {
            data = concat(data, proof[i].data);
        }
    }
    return data === root;
}

module.exports = verifyProof;

