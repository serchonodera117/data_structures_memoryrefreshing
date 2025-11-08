class MinHeap{
    constructor(){
        this.heap = []
    }
    getParentIndex(i){return Math.floor((i-1)/2)} //get parent index
    getLeftchildIndex(i){return 2*i+1}
    getRighttchildIndex(i){return 2*i+2}

    //swap positions the positions
    swap(i,j){ 
        [this.heap[i], this.heap[j]] = [this.heap[i], this.heap[i]]
    }
    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }
    heapifyUp(){   //starts from the bottom and goes to the top evaluating if elements meets the condictions to reordering according the rules to reshape the tree including the new element
        let index = this.heap.length-1;

        while(index>0 && this.heap[this.getParentIndex(index)]>this.heap[index]){
            this.swap[index, this.getParentIndex(index)]
            index = this.getParentIndex(index)
        }
    }

    // Extract the minimum and sort again to down, 
    extractMin(){ 
        if(this.heap.length === 0) return null;
        if(this.heap.length ===1) return this.heap.pop()
        
        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapfyDown()
        return min
    }

    heapfyDown(){ //order from the top to the bottom to the top to reorder the elements after a deletion, it replaces the missing element with a new one that meets the conditiosn
        let index = 0;
        const length = this.heap.length;

        while(this.getLeftchildIndex(index)<length){
            let smallerChildIndex = this.getLeftchildIndex(index);
            const rightChildIndex = this.getRighttchildIndex(index);

            if(rightChildIndex < length && this.heap[rightChildIndex]< this.heap[smallerChildIndex]){
                smallerChildIndex = rightChildIndex;
            } 
            if(this.heap[index] <= this.heap[smallerChildIndex]) break;
            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }

    }

    peek(){
        return this.heap[0] || null;
    }

}

const heap = new MinHeap();
heap.insert(5);
heap.insert(3);
heap.insert(2);
heap.insert(4);
heap.insert(6);
heap.insert(100);

console.log("normal heap: ",heap.heap)
console.log(heap.peek())


console.log("extract heap: ", heap.extractMin())
console.log("extract heap: ", heap.extractMin())


console.log("heap after extrat : ",heap.heap)