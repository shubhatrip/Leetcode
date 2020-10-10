/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length<=1) return intervals;
    intervals = intervals.sort(function(a,b){return a[0]-b[0]})
    var ret = []
    var curr = intervals[0]
    ret.push(curr)
    
    for(var i = 1; i<intervals.length; i++) {
        if(intervals[i][0]<=curr[1]) {
            curr[1] = Math.max(intervals[i][1], curr[1])
        }else {
            curr = intervals[i]
            ret.push(curr)
        }
    }
    return ret
};
