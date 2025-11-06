class Node {
    constructor (value, next, prev){
        this.value = value;
        this.next = next;  //points to next node 
        this.prev = prev //points to the previous node
    }
}

class DoublyLinkedList{
    constructor (){
        this.head = null; //first node
        this.tail = null; // last node
    }

    unshift(value){
        const newNode  = new Node(value, this.head, null);
        if(this.head){
            this.head.prev = newNode;
        }else{
            this.tail = newNode;
        }

        this.head = newNode
    }

    push(value){
        const newNode = new Node(value, null, this.tail)
        if(this.tail){
            this.tail.next = newNode
        }else{
            this.head = newNode;
        }
        this.tail = newNode
    }

    shift(){  //delete first node
        if(!this.head) return null;
        const oldHeadValue = this.head.value;
        this.head = this.head.next;

        if(this.head){
            this.head.prev = null;
        }
        else{
            this.tail = null
        }

        return oldHeadValue;

    }
    pop()  {//delete last node
        if (!this.tail) return null;

        const oldTailValue = this.tail.value;
        this.tail = this.tail.prev

        if(this.tail){
            this.tail.next  = null;
        }else{
            this.head = null;
        }
        return oldTailValue
    }
}

const myList = new DoublyLinkedList();
console.log(`my list: ${myList.toString()}`);

myList.unshift("manzana");
myList.unshift("pera");
myList.push("banana");
myList.push("xd");
myList.push("pi{a");

console.log(myList);