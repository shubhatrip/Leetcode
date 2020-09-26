/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    if(!gas){
    return -1;
  }

  if(!gas.length){
    return -1;
  }

  let currentSum = 0, currentSumLeastIndex = null, totalSum = 0;
  for(let i = 0; i < gas.length; i++){
    let diff = gas[i] - cost[i];

    if(currentSumLeastIndex === null){
      currentSumLeastIndex = i;
    }

    currentSum += diff;
    totalSum += diff;

    if(currentSum < 0){
      currentSum = 0;
      currentSumLeastIndex = null;
    }

  }

  if(totalSum < 0){
    return -1;
  }

  return currentSumLeastIndex !== null ? currentSumLeastIndex : -1;
};
