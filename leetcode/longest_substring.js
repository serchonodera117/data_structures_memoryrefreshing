var lengthOfLongestSubstring = function(s) {
    // if(!s.trim()) return s.length
    
    let arr = s.split('')
    let amount = 0
    let subStr = ""
    let subStrings = []
    let repeated = new Map();

    for(let i =0; i<arr.length; i++){
        if(repeated.has(arr[i])){
            subStrings.push(subStr.split(''))
            repeated.clear()
            subStr = ""
        }

        repeated.set(arr[i], i)
        subStr += arr[i]
    }
    let x = 0
    for(let i = 0; i< subStrings.length; i++){
        if(subStrings[i].length > x){
            x = subStrings[i].length
        }
    }

    return x
};

console.log(lengthOfLongestSubstring("au"))