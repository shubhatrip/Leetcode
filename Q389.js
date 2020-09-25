/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var ret = 0;
    for (var i = 0; i < s.length; i++) {
        ret -= s.charCodeAt(i);
        ret += t.charCodeAt(i)
    }
    return String.fromCharCode((ret + t.charCodeAt(t.length-1)));
};
