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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(root === null) {
        var temp = new TreeNode(val, null, null);
        return temp;
    }
    function insert(node, val) {
        if(val>node.val) {
            if(node.right === null) {
                var temp = new TreeNode(val, null, null);
                node.right = temp;
            } else insert(node.right, val)
        } else if(val<node.val) {
            if(node.left === null) {
                var temp = new TreeNode(val, null, null);
                node.left = temp;
            } else insert(node.left, val)
        }
    }
    insert(root, val)
    return root;
};
