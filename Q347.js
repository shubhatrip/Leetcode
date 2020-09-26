/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map = new Map();
    
    for(var i = 0; i<nums.length; i++){
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i])+1);
        } else {
            map.set(nums[i], 1);
        }
    }
    var mapSort = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    return [...mapSort.keys()].splice(0,k)
};
