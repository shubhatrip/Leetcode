/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    var ret = 0;
    var stack = [];
    var count = 0;
    if(s.length<2)return ret;
    for(var i = 0; i < s.length; i++) {
        var ch = s.charAt(i)
        if(ch === '(') {
            stack.push(ch)
            count ++
        } else if(ch === ')') {
            stack.pop()
            count--;
        }
        ret = Math.max(ret, count)
    }
    return ret;
};
