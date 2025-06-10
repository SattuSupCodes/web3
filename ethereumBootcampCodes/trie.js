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

module.exports = Trie;