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
  knthLast(k){
    //k = number = place
    //if(runner.next *k == null)
    if(k<0){
        return null
    }



    var runner = this.head;
    let followingNode = runner;
    let longRunner = runner;

    while(k > 0 && runner != null){
        runner = runner.next;
       k --
    }
    if(k>0){
        return null
    }
    longRunner = runner;
    while(longRunner!=null ){
        longRunner = longRunner.next;
        followingNode = followingNode.next; 
    }
    
    return followingNode.val


    // while(runner != null){
    //     listArray.push(runner.val);
    //     runner = runner.next;

    // }
    // return listArray[k-1];
    
}

}
const list = new SList();

list.add(2);

list.add(3);
list.add(4);
console.log(list.printing());
console.log(list.knthLast(-2));





