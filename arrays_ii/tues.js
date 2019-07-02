//Here, a balance point is on an index, not between indices. 
//Return the balance index where sums are equal on either side (exclude its own value). 
//Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2 , but [9,9] → -1 

function balancePoint(arr){
    var val=0;
    var val1=0
     
    for(var i=0; i<arr.length; i++){
        val+= arr[i];
        for(var j=arr.length-1; j>i+1; j--){
            val1+=arr[j];
           
        }console.log("This is val and val1", val, val1)
        if(val==val1){
            return i+1;
        }
    
        val1=0;
    
    }
    return -1;
    

}
console.log(balancePoint([-2,5,7,0,3,5]))