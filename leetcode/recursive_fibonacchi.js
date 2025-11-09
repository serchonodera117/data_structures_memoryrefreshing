function fibonacchi(n, memo){
    if(memo[n]!=null){return memo[n]}
    let result
    if(n==1 || n==2) result = 1;
    else{
        result = fibonacchi(n-1, memo) + fibonacchi(n-2, memo);
    }    
    memo.push(result);
    return result;
}
let memmo = []
console.log(`fibonacchi number : ${fibonacchi(5, memmo)}`)
console.log("fibonacchi susecion number: ", memmo)
