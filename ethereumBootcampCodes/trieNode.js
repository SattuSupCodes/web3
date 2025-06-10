//working with trie.js to build merkle patricia tree

class TrieNode {
    constructor(key) {
        this.key = key
        this.isWord = false
        this.children = {}
    }
}

module.exports = TrieNode;