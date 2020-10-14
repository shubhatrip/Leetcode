/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0) return 0;
    var dp = new Array(nums.length+1);
    dp[0] = 0;
    dp[1] = nums[0]
    for(var i = 1; i<nums.length; i++) {
        dp[i+1] = Math.max(dp[i], dp[i-1]+nums[i])
    }
    return dp[nums.length]
};
