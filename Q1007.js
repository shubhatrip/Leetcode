/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
    
    function helper(target, arr1, arr2) {
        var numSwaps = 0;
        for(var i = 0; i<arr1.length; i++) {
            if(arr1[i] !== target && arr2[i] !== target) return Number.MAX_VALUE
            else if(arr1[i] !== target) numSwaps++;
        }
        return numSwaps;
    }
    
    var minSwaps =  Math.min(helper(A[0], A, B), helper(A[0], B, A), 
                     helper(B[0], A, B), helper(B[0], B, A));
    
    return minSwaps === Number.MAX_VALUE ? -1 : minSwaps;
};
