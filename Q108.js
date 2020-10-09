/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums === null || nums.length === 0) return null;
    
    function reverseInorder(nums, left, right) {
        if(left>right) return null;
        var mid = Math.floor(left + (right-left)/2);
        
        var curr = new TreeNode(nums[mid])
        curr.left = reverseInorder(nums, left, mid-1)
        curr.right = reverseInorder(nums, mid+1, right)
        
        return curr;
    }
    return reverseInorder(nums, 0, nums.length-1)
};
