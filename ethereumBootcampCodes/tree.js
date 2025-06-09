// A linked list is also a tree - just a really long one that only has one child per parent in a long 
// continuous chain. A tree is not necessarily a linked list. Here are the two code implementations for a 
// LinkedListNode and aTreeNode to help distinguish:

class LinkedListNode {
	constructor(data) {
	    this.data = data;
	    this.next = null;
	}
}

class TreeNode {
	constructor(data) {
	    this.data = data;
	    this.children = [];
	}
}
// Notice the TreeNode holds the typical data and an array to contain references to any children of that (parent) node.
// The LinkedListNode just keeps track of a next node.