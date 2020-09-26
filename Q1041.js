/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let dir = 0, mov = [0,0,0,0];
    for (let i = 0; i < instructions.length; i++) {
        if (instructions[i] === "G") mov[dir]++;
        else dir = (dir + (instructions[i] === "L" ?  1 : 3)) % 4;
    }
    return dir || (!(mov[0]-mov[2]) && !(mov[1]-mov[3])) ? true : false;
};
