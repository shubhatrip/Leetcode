/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var ret = []
    if(numRows === 0) return ret;
    ret.push([1])
    if(numRows === 1) return ret;
    ret.push([1,1])
    if(numRows === 2) return ret;
    for(var i = 3; i<=numRows; i++) {
        var last = ret[i-2]
        var temp = new Array(i);
        temp[0] = 1
        temp[i-1] = 1;
        for(var j = 1; j<i-1; j++) {
            temp[j] = last[j-1] + last[j]
        }
        ret.push(temp)
    }
    return ret
};
