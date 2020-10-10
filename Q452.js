/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if(points.length<1) return 0
    points = points.sort(function(a,b){return a[0]-b[0]})
    var ret = []
    var curr = points[0]
    ret.push(curr)
    for(var i = 1; i<points.length; i++) {
        if(points[i][0]<curr[1]) {
            curr[1] = Math.min(points[i][1], curr[1])
            curr[0] = Math.max(points[i][0], curr[0])
        } else if(points[i][0] === curr[1]) {
            curr[0] = curr[1]
        } else {
            ret.push(curr)
            curr = points[i]
        }
    }
    return ret.length
};
