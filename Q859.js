/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if(A.length !== B.length) return false
    
    if(A === B) {
        var unique = new Set()
        for(var i = 0; i<A.length; i++) {
            unique.add(A.charAt(i))
        }
        if(unique.size < A.length) return true
        return false
    }
    
    var non_unique = []
    for(var i = 0; i<A.length; i++) {
        if(A.charAt(i) !== B.charAt(i)) non_unique.push(i)
    }
    
    if(non_unique.length===2 && A.charAt(non_unique[0]) === B.charAt(non_unique[1]) && 
       A.charAt(non_unique[1]) === B.charAt(non_unique[0])) return true
    return false;
};
