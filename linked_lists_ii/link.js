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

        fromLast(k){
            //k = number = place
            //if(runner.next *k == null)
            if(k<0){
                return null;
            }
            var runner = this.head;
            let followingNode = runner;
            let longRunner = runner;
        
            while(k > 0 && runner != null){
                runner = runner.next;
                k --;
            }
            if(k>0){
                return null;
            }
            longRunner = runner;
            while(longRunner!=null ){
                longRunner = longRunner.next;
                followingNode = followingNode.next; 
            }
        
            return followingNode.val;
            // while(runner != null){
            //     listArray.push(runner.val);
            //     runner = runner.next;
        
            // }
            // return listArray[k-1];
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
    //Return whether a list is a palindrome. String palindromes read the same front-to-back and back-to-front. Here, compare node values . N.B.: to be 
    //accurate in JavaScript, use === instead of == , since 1 == true == [1] == "1" .
    //racecar, ana
    palindrome(){
        var pal1="";
        var pal2="";
        var runner= this.head;
    
        while(runner != null){
            pal1 += runner.val;
            runner = runner.next;   
        }
        console.log("This is pal1", pal1);
        for(var i = pal1.length-1; i>=0; i--){
            pal2 += pal1[i];
        }
        console.log("End FOR loop", pal2);
        return(pal1 === pal2);
          
    }
    pal2(){
        var length=this.length();
        var runner = this.head;
        
        while(runner !=null){
            var opIndx = this.fromLast(length);
            length -=1;
            console.log("this is opIndx", typeof(opIndx))
            if(!(runner.val === opIndx)){
                return false;
            }
            console.log("this is runner.val", runner.val)
            runner =runner.next;
        }
        return true;

    }
    length(){
        var length=0;
        var runner= this.head;
    
        while(runner != null){
            length += 1;
            runner = runner.next;   
        }
        return length;

    }
}
const list = new SList();
console.log(list);
list.add('2');
console.log(list);
list.add(1);
list.add(3); //new head
console.log(list.pal2());
console.log(list.palindrome());
// console.log(list.printing());
// console.log(list.reverse());

// console.log(list.printing());


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