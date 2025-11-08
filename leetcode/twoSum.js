var twoSum = function(nums, target) {
    // let min = -1;

    for(let i = 0; i < nums.length; i++)
        for(let j = 1; j < nums.length-1; j++){
           // if(i==j) break;
           console.log(`pos [${i}][${j}] = ${nums[i] + nums[j]}`)
            if(nums[i] + nums[j] == target){
                console.log([i,j])
            }
        }

};


// console.log("case 1", twoSum([2,7,11,15],9));
console.log("case 2", twoSum([3,2,4],6));
// console.log("case 3", twoSum([3,3],));