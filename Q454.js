/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    var map = new Map();
    var ret = 0;
    
    for(var i = 0; i<A.length; i++) {
        for(var j = 0; j<B.length; j++) {
            var sum = A[i] + B[j];
            if(map.has(sum)) map.set(sum, map.get(sum) + 1);
            else map.set(sum, 1);
        }
    }
    
    for(var i = 0; i<C.length; i++) {
        for(var j = 0; j<D.length; j++) {
            var sum = -1 * (C[i] + D[j]);
            if(map.has(sum)) {
                ret += map.get(sum);
            }            
        }
    }
    return ret;
};
