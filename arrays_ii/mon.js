function return_array(array){
    var sum = sum_array(array);
    sum = sum /array.length
    console.log(sum)
  }
  
    
    return_array([1,2,3,4,5])
    
    function sum_array(array){
      var sum = 0;
      for(var i = 0; i < array.length; i++){
        sum+=array[i]
      }
      return sum
    }
  
  console.log(sum_array([1,2,3,4,5]))
  //   var stop =0
  function balance_point(array){
    //grab slice
    var sum =0, sum1 = 0;
    for(var i = 0; i < array.length; i++){
      sum+= array[i];
      console.log('first for triggerd')
  //     console.log('sum=', sum)
      
      for(var j = array.length-1; j > i; j--){
        sum1+=array[j];
        console.log('i ='+i+'j='+j)
        console.log('second for loop triggerd')
  //       console.log('sum1 =',sum1)
  //       stop ++
  //       if(stop > array.length){
  //         stop=0;
  //         return('it got infinite')
  //       }
      }
      console.log('sum='+sum+ 'sum1='+ sum1)
      if(sum == sum1){
        return true
      }
      else{
        sum1=0;   
      }
      
    }
    
     return false
  }
   
   console.log(balance_point([1,1,1,1,1,1,1,1,1,1,10]))
  //  console.log(balance_point([1,2,4,2,1]))