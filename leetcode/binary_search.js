let input = [1,2,3,4,6,7,8]

function binarySearch(arr, target, low, high){
    if(low > high) return false
    
    let pivot = Math.floor((low+high)/2);

    if(arr[pivot]===target) return true;

    if(arr[pivot] > target){
      return  binarySearch(arr, target, start, pivot-1)
    }
    else{
      return  binarySearch(arr, target, pivot+1, high)
    }
}
console.log(binarySearch(input, 7, 0, input.length-1))

