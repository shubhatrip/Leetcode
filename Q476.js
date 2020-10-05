/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var binary = '';
    var rem;
    var ret = 0;
    while(Math.floor(num/2)) {
        rem = num%2 === 0? '1' : '0';
        binary = binary.concat(rem);
        num = Math.floor(num/2);
    }
    for(var i = 0; i<binary.length; i++) {
        ret += binary.charAt(i) * Math.pow(2, i);
    }
    return ret
};
