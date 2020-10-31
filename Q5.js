/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length <1) return ''
    var start = 0, end = 0;
    
    function helper(str, left, right) {
        if(left>right) return 0;
        while(left>=0 && right<str.length && str.charAt(left) === str.charAt(right)) {
            left--;
            right++;
        }
        return right-left-1;
    }
    
    for(var i = 0; i<s.length; i++) {
        var len = Math.max(helper(s, i, i), helper(s, i, i+1))
        if(len > end-start) {
            end = i + Math.floor(len/2)
            start = i - Math.floor((len-1)/2)
        }        
    }
    return s.substring(start, end+1)
};
