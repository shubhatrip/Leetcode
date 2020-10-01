/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length < 2) return [strs];
    var map = new Map();
    for(var i = 0; i < strs.length; i++) {
        var elem = strs[i].split('').sort().join('');
        if(map.has(elem)) {
            var temp = map.get(elem);
            temp.push(strs[i]);
            map.set(elem, temp);
        }
        else map.set(elem, [strs[i]])
    }
    var ret = []
    var iterator = map.values();
    var size = map.size;
    while(size) {
        ret.push(iterator.next().value);
        size--;
    }
    return ret;
};
