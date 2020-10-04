/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals = intervals.sort(function(a,b){
        if (a[0] == b[0]) return b[1]-a[1];
        else return a[0]-b[0];
    })
    var ret = intervals.length;
    for(var i = 1; i<intervals.length; i++) {
        if(intervals[i][1]<=intervals[i-1][1]) {
            ret--;
            intervals[i] = intervals[i-1]
        }
    }
    return ret;
};
