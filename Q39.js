/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var ret = [];
    
    function combination(id, n, comb) {
        if (n == 0) {
            ret.push(comb);
            return true;
        }

        for (var i=id;i<candidates.length;i++) {
            var c = candidates[i];
            if (c <= n) combination(i, n - c, [...comb, c]);
        }

        return false
    }
    
    combination(0, target, []);
    return ret;
};
