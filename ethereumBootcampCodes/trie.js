//lets begin with patricia merkle tree
const TrieNode = require('./TrieNode');

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }
    insert(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            node.children[word[i]] = new TrieNode(word[i]);
            node = node.children[word[i]];

            if (i == word.length - 1) {
                node.isWord = true;
            }
        }
    }
}
//these trie/trees are a bit ughh ngl
module.exports = Trie;

//Add branching to the insert function. When a second child comes up, be sure to add it as well.

const TrieNode = require('./TrieNode');

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }
    insert(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            if (!node.children[word[i]]) {
                node.children[word[i]] = new TrieNode(word[i]);
            }

            node = node.children[word[i]];

            if (i == word.length - 1) {
                node.isWord = true;
            }
        }
    }
}

module.exports = Trie;

//adding contains function
const TrieNode = require('./TrieNode');

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }
    insert(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            if (!node.children[word[i]]) {
                node.children[word[i]] = new TrieNode(word[i]);
            }

            node = node.children[word[i]];

            if (i == word.length - 1) {
                node.isWord = true;
            }
        }
    }
    contains(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            if (node.children[word[i]]) {
                node = node.children[word[i]];
            } else {
                return false;
            }
        }

        return node.isWord;
    }
}

module.exports = Trie;