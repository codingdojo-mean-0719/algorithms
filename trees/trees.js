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
}


testArr = [10,7,15,5,12,13,17,9];
var tree = new Tree();
for(var i = 0; i < testArr.length; i++){
    tree.add(testArr[i]);
}
console.log(tree)
console.log(tree.min2())
  