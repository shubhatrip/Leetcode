/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var ret = [];
    candidates.sort(function(a,b){return a-b});
    
    function combination(id, n, comb) {
        if (n == 0) {
            ret.push(comb);
            return true;
        }

        for(var i = id; i<candidates.length; i++) {
            var c = candidates[i];
            if (c <= n) combination(i+1, n - c, [...comb, c]);
            while(candidates[i]==candidates[i+1]) i++
        }
    }
    
    combination(0, target, []);
    return ret;
};
