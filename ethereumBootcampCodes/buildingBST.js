//1.
//Finish the constructor function on the Tree class in the new file Tree.js.
// All you need to do for now is store null on a root property

class Tree {
    constructor() {
        this.root = null
    }
}

module.exports = Tree;

//2.
// Create a new method addNode on Tree which will take a new node and add it to the tree.
// Assume that the tree is empty for this stage. Simply set the root to be the node passed into the method.

class Tree {
    constructor() {
        this.root = null
    }
    addNode(node){
        if(!this.root){
            this.root = node
        }
    }
}

module.exports = Tree;

//3.
// Modify the addNode function to also handle adding the first children of the root

class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {
        if(!this.root) {
            this.root = node;
        }

        if(node.data < this.root.data) {
            this.root.left = node;
        }

        if(node.data > this.root.data) {
            this.root.right = node;
        }
    }
}

module.exports = Tree;

//4.
//Complete the function addNode so that it can handle adding nodes no matter how large the tree gets.
class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {
        if(!this.root) {
            this.root = node;
            return;
        }
        
        let ptr = this.root;
        while(true) {
            if(node.data < ptr.data) {
                if(!ptr.left) {
                    ptr.left = node;
                    break;
                }
                else {
                    ptr = ptr.left;
                }
            }
            if (node.data > ptr.data) {
                if (!ptr.right) {
                    ptr.right = node;
                    break;
                }
                else {
                    ptr = ptr.right;
                }
            }
        }
    }
}

module.exports = Tree;