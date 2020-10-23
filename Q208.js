class TrieNode{
    constructor(val){
        this.val = val; //cur node's val
        this.children = []; //cur node's children list (all chars)
        this.count = 0;
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode(null);
    } 
    
    insert(word) {
        let cur = this.root; //each time insert, starting from top root
        for (let c of word) {
            if (!cur.children[c]) {
                cur.children[c] = new TrieNode(c);
            }
            cur = cur.children[c]; //search children's children  next node/pointer
        }
        cur.count += 1
    }
    
    search(word) {
        let cur = this.root; //each time search, starting from top root
        for (let c of word) {
            if (!cur.children[c]) return false;
            else cur = cur.children[c];
        }
        return cur.count;
    }
    
    startsWith(prefix) { //check start with word
        let cur = this.root;
        for (let c of prefix){
            if (!cur.children[c]) return false;
            else cur = cur.children[c];
        }
        return true; 
    }
}
