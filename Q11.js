/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(height.length<2) return 0
    var left = 0
    var right = height.length-1
    var max = 0
    while(left<right) {
        var area = (right-left) * Math.min(height[left], height[right]);
        max = Math.max(max, area)
        if(height[left] <= height[right]) left++;
        else right--;
    }
    return max;
};
