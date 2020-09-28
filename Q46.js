/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var ret = [];
    var n = nums.length;
    
    function swap(arr, l, r) {
        var temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
    }
    function currentPermutation(l) {
        if(l==n) {
            ret.push(nums.slice(0))
            return
        }
        for(var i = l; i < n; i++) {
            swap(nums, l, i);
            currentPermutation(l+1);            
            swap(nums, l, i);
        }
    }
    
    currentPermutation(0);
    return ret;
};
