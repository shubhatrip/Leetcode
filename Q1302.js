/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {    
    
    function getHeight(node) {
        if(node === null) return 0;
        else return Math.max(getHeight(node.left), getHeight(node.right))+1
    }
    var height = getHeight(root);
    
    function DFSsum(node, height) {
        if(node === null) return 0;
        if(height === 1) return node.val;
        return DFSsum(node.left, height-1) + DFSsum(node.right, height-1);
    }
    
    return DFSsum(root, height);
};
