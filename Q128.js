/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length<2) return nums.length;
    var set = new Set();
    for(var num of nums) {
        set.add(num);
    }
    var curr = 1;
    var max = 1;
    for(var num of set) {
        if(!set.has(num-1)) {
            curr = 1;
            var currentNum = num
            while(set.has(currentNum+1)) {
                curr++;
                currentNum++;
            }
        }
        max = Math.max(curr, max)
    }
    return max;
};
