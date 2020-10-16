/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length === 0 || matrix[0].length === 0) return false;
    
    var left = 0;
    var right = matrix[0].length-1
    
    if(target < matrix[0][0] && target > matrix[matrix.length-1][right]) return false;
    
    function binarySearch(nums, target) {
        var left = 0; 
        var right = nums.length-1;
        while(left<=right) {
            var mid = Math.floor((left+right)/2)
            if(nums[mid] === target) return mid;
            else if(nums[mid]>target) right = mid-1;
            else left = mid+1;
        }
        return -1;
    }
    
    var ret = -1;
    
    for(var i = 0; i<matrix.length; i++){
        var range = matrix[i];
        if(target>=range[0] && target<=range[right]){
            ret = binarySearch(range, target);
            if(ret>-1) return true;
        }        
    }
    return false;
};
