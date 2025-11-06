class Stacks{
    constructor(){
        this.items  = []
    }

    add(element){
        this.items.push(element);
    }
    delete(){
        this.items.pop();
    }
    get_and_delete(){
        if (this.items.length < 1) return 0;
        let x = this.items[this.items.length1-1]
        this.items.pop();
        return;
    }
    
    isEmpty(){
        return this.items.length === 0;
    }
}


let myStack = new Stacks()

myStack.add(1);
myStack.add(3);
myStack.add(4);
myStack.add(5);
myStack.add(10);

console.log(myStack)
myStack.delete()
console.log(myStack)