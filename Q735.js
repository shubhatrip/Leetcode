/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    if(asteroids.length<2) return asteroids
    
    var arr = [];
    arr.push(asteroids[0])
    for(var i = 1; i < asteroids.length; i++) {
        if (asteroids[i] * arr[arr.length-1] < 0 && asteroids[i]<0){
            var inOrbit = Math.abs(arr[arr.length-1])
            var incoming = Math.abs(asteroids[i])
            if(incoming > inOrbit) {
                arr[arr.length-1] = asteroids[i]
                while(arr[arr.length-2] && arr[arr.length-2]*arr[arr.length-1] < 0){
                    if((-1 * arr[arr.length-2]) === arr[arr.length-1]) 
                        arr.splice(arr.length-2, 2)
                    else if(Math.abs(arr[arr.length-2]) < Math.abs(arr[arr.length-1])) {
                        arr[arr.length-2] = arr[arr.length-1]
                        arr.splice(arr.length-1, 1)
                    } else {
                        arr.splice(arr.length-1, 1)
                        break;
                    }
                }
            }
            else if(inOrbit === incoming)  arr.splice(arr.length-1, 1)
        } else arr.push(asteroids[i])       
    }
    return arr;
}
