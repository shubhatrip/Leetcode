/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if(nums.length === 1) return [nums[0]];
    var counter1 = 0;
    var counter2 = 0;
    var candidate1 = null;
    var candidate2 = null;
    
    for(let i = 0; i < nums.length; i++) {
       if(candidate1 === nums[i]){
           counter1++;
       } else if(candidate2 === nums[i]){
            counter2++;
        } else if(counter1 === 0){
            candidate1 = nums[i];
            counter1++;
        } else if(counter2 === 0){
            candidate2 = nums[i];
            counter2++;
        } else{
            counter1--;
            counter2--;
        }        
    }
    
    let appear1 = 0, appear2 = 0;
    let res = [];
    
    nums.forEach(num => {       
        if(num === candidate1) appear1++;
        if(num === candidate2) appear2++;
    })
    if(appear1 > nums.length / 3) res.push(candidate1);
    if(appear2 > nums.length / 3) res.push(candidate2);
    
    return res;
};
