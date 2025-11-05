let array_test = [ ];

//|||||||||||||||||||||||||||BUBBLE SORT, NOT RECOMENDED||||||||||||||||||||||||||||||||||||||||||||||||
let bubble_sort = (arr)=>{
    for(let i =0; i < arr.length; i++)
        for(let j=0; j< arr.length-1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j+1];
                arr[j+1] = arr[j]
                arr[j] = temp
            }
    }
    return arr;
}


//||||||||||||||||||||||||||||||||QUICK SORT||||||||||||||||||||||||||||||||||||||
let quick_sort = (arr)=>{
    return arr;
}



function randomlyFill(number){
    for (let i=0; i<=number; i++){
        let size  = Math.floor(Math.random()*10);
        array_test.push([]);
        for(let j=0; j<= size; j++){
            array_test[i].push(Math.round(Math.random()*100));
        }

    }

    console.log("Original array tests: \n")
    for(let i = 0; i<array_test.length-1; i++){
        console.log(`Array ${i+1}: [${array_test[i]}]`);
    }
    
    console.log("\n------------------\n")
}


// TESTS
function tets(amount, sortMethod){
    console.log("\n-----TESTS-----\n")
    for(let i = 0; i< amount; i++){
        console.log(`Sorted Test ${i}: `, sortMethod(array_test[i]));
    }
}


console.log("---- BubbleSort: ---- \n");
randomlyFill(3);
console.log(bubble_sort(array_test[0]));
tets(3, bubble_sort);