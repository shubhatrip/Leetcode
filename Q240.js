/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length === 0 || matrix[0].length === 0) return false;
    
    var n = matrix.length;
    var m = matrix[0].length;
    if(target < matrix[0][0] || target > matrix[n-1][m-1]) return false;
    
    for(var i = 0; i<n; i++) {
        if(matrix[i][0] > target) break;
    }
    n = i-1;
    
    function search(arr, target) {
        var left = 0;
        var right = arr.length -1;
        while(left<=right) {
            var mid = Math.floor((left+right)/2);
            if(arr[mid] === target) return true;
            else if(arr[mid] < target) left = mid+1;
            else right = mid-1;
        }
        return false;
    }
    while(n>=0) {
        if(search(matrix[n], target)) return true;
        n--;
    }
    return false;
};
