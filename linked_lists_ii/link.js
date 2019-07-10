class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }

}
class SList{
    constructor(){
        this.head=null;
    }
    //adding a value to our SList
    add(val){
        const node = new Node(val);
        if(this.head==null){
            this.head = node;
        }
        else{
            node.next= this.head;
            this.head= node;
        }
    }
    contains(val){
        //check if we have a value
        var runner = this.head;
        while(runner){
            if(runner.val == val){
                return true;
            }
            runner =runner.next;
        }
        return false;
    }
    printing(){
        //printing the current values
        var runner =this.head;
        
        while(runner){
            console.log(runner.val);// we're console here to grab the val
            runner=runner.next;
            
        }
        
    }
    //SList: Reverse
    //Reverse the node sequence. Given an SList object, the .head property should 
    //point to the previously-last node, and the rest of the nodes should follow 
    //similarly from back to front.
    reverse(){
        var runner = this.head;
        var previousNode= null;
        var stop=0;
        while(runner){
            var nextNode= runner.next;
            runner.next = previousNode;
            previousNode = runner;
           
            if(stop++ == 5){
                console.log("broke");
                break;
            }
            runner = nextNode;
            //console.log(runner)
        }
        this.head = previousNode;
        //console.log("reverse running");
        //node has to point previouse neighbord
    }
}
const list = new SList();
console.log(list);
list.add(2);
console.log(list);
list.add(3);
list.add(4); //new head
console.log(list.printing());
console.log(list.reverse());

console.log(list.printing());


// console.log(list.contains(2));
// console.log(list.contains(5));
// console.log(list.printing());

//---------THIS IS WHAT WE GOT IN OUR TERMNAL----------------------------
//SList { head: null }
// SList { head: Node { val: 2, next: null } }
// SList { head: Node { val: 4, next: Node { val: 3, next: [Node] } } }
// true
// true
// true
// false
// 4
// 3
// 2