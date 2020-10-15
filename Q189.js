/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k%nums.length;
    var curr, prev, temp, j;
    var count = 0;
    for(var i = 0; count<nums.length; i++) {
        curr = i;
        prev = nums[i];
        do {
            j = (curr+k) % nums.length;
            temp = nums [j];
            nums[j] = prev;
            prev = temp;
            curr = j;
            count ++;
        }while (i !== curr);        
    }
};
