/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length < 2) return Math.max(...nums)
    var dp = new Array(nums.length);
    dp[0] = 0
    function robber(dp, arr) {
         dp[1] = arr[0]
        for(var i = 1; i<arr.length; i++) {
            dp[i+1] = Math.max(dp[i], dp[i-1]+arr[i])
        }
        return dp[dp.length-1]
    }
    return Math.max(robber(dp, nums.slice(0,nums.length-1)), robber(dp, nums.slice(1)))
};
