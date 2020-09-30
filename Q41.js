/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var missed = 1;
    nums = nums.sort(function(a,b){return a-b});
    for(var i = 0; i < nums.length; i++) {
        if(nums[i]>0) {
            if(missed === nums[i]) missed++
        }
    }
    return missed;
};
