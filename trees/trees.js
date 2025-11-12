class Tree{
    constructor(value){
        this.value =  value;
        this.left = null;
        this.right = null;
    }

}

const root = new Tree(1); 

const node1 = new Tree(2); 
const node2 = new Tree(4); 
const node3 = new Tree(6); 
const node4 = new Tree(3); 
const node5 = new Tree(12); 

root.left = node1;
root.right = node2

node1.left = node4
node1.right= node3

node2.left = node5


// in order shearch
function inorder(node){       
    if(node === null) return

    inorder(node.left)
    console.log(node.value)
    inorder(node.right)
}

// console.log("inorder")
// inorder(root)

function preorder(node){
    if(node === null) return

    console.log(node.value)
    preorder(node.left)
    preorder(node.right)
 }

//  console.log("preorder")
//  preorder(root)

 
function postOrder(node){
    if(node === null)return;
    
    inorder(node.left)
    inorder(node.right)
    console.log(node.value)
}


// console.log("postorder")
// preorder(root)

function insert(node, value){ 
    if(node === null){
        return null
    }
    if(value> node.value){
        if(node.right==null){
            const newNode = new Tree(value);
            node.right = newNode
        }else{
            insert(node.right,value)
        }
    }
    else if (value < node.value){
        if(node.left === null){
            const newNode = new Tree(value)
            node.left  =newNode
        }
        else{
            insert(node.left, value)
        }
    }
    else{
        insert(node.left, value)
    }
}

insert(root,1000)

function find (node, value){
    if (node === null) return null
    
    if(node.value === value){return node}
    
    const left = find(node.left, value);
    const right = find(node.right, value);
    
    return left || right;
}

function invertTree(root){
    if(root === null) return null;
    let temp = root.left;
    root.left = root.right
    root.right = temp

    return root
}

// let val = find(root, 6)
// console.log(val)
// if(val) console.log(val.value , val.left, val.right);

console.log("Original tree", root);

invertTree(root)

console.log("Inverted tree", root);
