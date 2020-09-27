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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var ret = new Array();
    var i =0;
    //var j = 0;
    function levelOrder(node, i) {        
        if(node===null) return
        ret[i] = ret[i] || [];
        ret[i].push(node.val);
        levelOrder(node.left, i+1);
        levelOrder(node.right, i+1);
    }
    levelOrder(root, 0)
    return ret;
};
