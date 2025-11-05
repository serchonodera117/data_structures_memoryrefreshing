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
let partition = (arr, low, high)=>{
    let pivot = arr[high];
    let i  = low-1
    
    for(let j = low; j<=high-1; j++){
        if(arr[j]< pivot){ //if current value is smaller than pivot, increment index of smaller [0,2,3,4,60,10, 8]
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]] ///swap smaller elements 
        }
    }
    [arr[i+1], arr[high]] = [arr[high], arr[i+1]] //swap pivot.
    
    return i+1;
}

function QuickSort(arr, low, high){
    if(low >= high) return;
    let pivot  = partition(arr, low, high);
    QuickSort(arr, low, pivot-1); //left: low to pivot (pi-1 because pivot stay statick) 
    QuickSort(arr, pivot+1, high);  //right: pivot to high (pivot +1 because pivot stay statick)
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
        // console.log(`Sorted Test ${i}: `, sortMethod(array_test[i])); //bubble sort parameters
        console.log(`Sorted Test ${i}: `, sortMethod(array_test[i])); //quick sort parameters
    }
}


randomlyFill(3);

// console.log("---- BubbleSort: ---- \n");
// console.log(bubble_sort(array_test[0]));
// tets(3, bubble_sort);

console.log("---- QuickSort: ---- \n");
let a  =array_test[0]
QuickSort(a, 0, a.length-1)
console.log("Array 1:", a);
