/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var res = [];
    function findSubset(arr,curr){
            res.push([...curr])
        for(let i=0;i<arr.length;i++){
            curr.push(arr[i])
            findSubset(arr.slice(i+1),curr)
            curr.pop()
        }
    }
    
    findSubset(nums,[])
    return res
}
