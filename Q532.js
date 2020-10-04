/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    nums = nums.sort(function(a,b){return b-a})
    var map = new Map()
    var count = 0;
    map.set(nums[0]-k, 1)
    for(var i = 1; i<nums.length; i++) {
        if(map.has(nums[i])) {
            count += map.get(nums[i])
            map.delete(nums[i])
        }
        if(nums[i] !== nums[i-1]) {
        var temp = nums[i] - k;
        if(map.has(temp)) map.set(temp, map.get(temp)+1)
        else map.set(temp, 1)
        }
    }
    return count;
};
