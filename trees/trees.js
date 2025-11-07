function Node(value){
    this.value =  value;

    this.left = null;
    this.right = null;
}

const root = new Node(6); 

const node1 = new Node(2); 
const node2 = new Node(4); 
const node3 = new Node(6); 
const node4 = new Node(3); 
const node5 = new Node(12); 

root.left = node1;
root.right = node2

node1.left = node4
node1.right= node3

node2.left = node5

function inorder(node){
    if(node === null) return

    inorder(node.left)
    console.log(node.value)
    inorder(node.right)
}

inorder(root)