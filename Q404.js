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
var sumOfLeftLeaves = function(root) {
    var sum = 0;
    
    function leftSum(node, isLeft) {
        if(node === null) return
        if(node.left === null && node.right === null && isLeft) sum += node.val;
        leftSum(node.left, true);
        leftSum(node.right, false);
    }
    leftSum(root, false)
    
    return sum;
};
