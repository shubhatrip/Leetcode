/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var len = 0;
    s=s.trim();
    for (var i = s.length-1; i>=0; i--) {
        if (s.charAt(i) === ' ') {
            return len;
        }
        len++;
    }
    return len;
};
