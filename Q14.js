/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    var common = strs[0];
    for (var i = 1; i < strs.length; i++) {
        while(strs[i].indexOf(common) !== 0) {
            common = common.substr(0, common.length-1)
        }
    }
    return common
};
