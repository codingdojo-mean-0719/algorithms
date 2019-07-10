class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  
    add(node) {
      if (node.value < this.value) {
        if (this.left) {
          return this.left.add(node);
        }
        this.left = node;
      } else {
        if (this.right) {
          return this.right.add(node);
        }
  
        this.right = node;
      }
  
      return this;
    }

    min2(){
        if(this.left){
            return this.left.min2()
        }
        return this.value;
    }

    max(){
        if(this.right){
            return this.right.max()
        }
        return this.value;
    }

    size(){
        var counter = 1;
        if(this.left){
            counter += this.left.size();
        }
        if(this.right){
            counter += this.right.size();
        }
        return counter
       // return (this.left.size() + 1 + this.right.size())
    }

    size2(){
        return (this.left ? this.left.size() : 0) + (this.right ? this.right.size() : 0) + 1;
    }

    contains(value){
        if(this.value === value){
            return true
        }
        if(value < this.value){
            if(this.left){
                return this.left.contains(value)
            }
        }
        else{
            if(this.right){
                return this.right.contains(value)
            } 
        }
        return false
    }
}

class Tree {
    constructor() {
      this.root = null;
    }
  
    add(value) {
      const node = new Node(value);
  
      if (this.root === null) {
        this.root = node;
      } else {
        this.root.add(node);
      }
  
      return this;
    }

    isEmpty(){
        return this.root === null;
    }

    min(){
        if(this.isEmpty() === true){
            return null;
        }
        var runner = this.root;
        while(runner.left != null){
            runner = runner.left;
        }
        return runner.value;
    }

    min2(){
        if(this.isEmpty()){
            return null;
        }
        return this.root.min2();
    }

    max(){
        if(this.isEmpty()){
            return null;
        }
        return this.root.max();
    }

    size(){
        if(this.isEmpty()){
            return 0;
        } else {
            return this.root.size()
        }
    }

    contains(value){
        console.log("value", value)
        if(this.isEmpty()){
            return false;
        }
        return this.root.contains(value)
    }
}


testArr = [10,7,15,5,12,13,17,9];
var tree = new Tree();
for(var i = 0; i < testArr.length; i++){
    tree.add(testArr[i]);
}
console.log(tree)
console.log(tree.max())
  