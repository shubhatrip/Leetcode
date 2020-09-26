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
var maxDepth = function(root) {
    
    function findHeight(node) {
        if(node === null) return 0;
        return Math.max(findHeight(node.left), findHeight(node.right))+1
    }
    return findHeight(root);
};
