/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) return ''
  return '' + root.val + ',' + serialize(root.left) + ',' + serialize(root.right)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data.length === 0) return null
    var arr = data.split(',');
        
    function helper(arr) {
        var val = arr.shift();
        if(!val) return null
        var curr = new TreeNode(val)
        curr.left = helper(arr)
        curr.right = helper(arr)
        return curr
    }
    
    return helper(arr)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
