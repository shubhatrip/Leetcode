/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var rows = matrix.length;
    
    for(var i = 0; i < rows; i++) {
        for(var j = i; j < rows; j++) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    for(var i = 0; i < rows; i++) {
        for(var j = 0; j < rows/2; j++) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[i][rows-j-1]; 
            matrix[i][rows-j-1] = temp;
        }
    }
};
