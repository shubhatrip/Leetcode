/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<2) return x
    for(var i = 1; i<x; i++) {
        if(i*i <= x && (i+1)*(i+1) >x) return i
    }
};
