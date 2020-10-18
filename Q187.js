/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    var ret = new Set();
    var map = new Map();
    for(var i = 0; i+10<=s.length; i++) {
        var sub = s.slice(i, i+10);
        if(map.has(sub) && map.get(sub) === 1) {
            ret.add(sub)
            map.set(sub, 2)
        }
        else map.set(sub, 1)
    }
    return Array.from(ret)
};
