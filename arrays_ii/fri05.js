function minSorted(array){
  
    let stop = 0;
    let mid = Math.floor(array.length/2);
    let end = array.length - 1;
    let start = 0;
    
    while(end - start > 1){
      console.log('while start and end '+start+" "+end)
      if(array[mid] < array[end]){
        end = mid;
        
        console.log('if start and end '+start+" "+end)
        
      }else{
        console.log('else start and end '+start+" "+end)
        start = mid;
      }
      console.log('end while start and end '+start+" "+end)
      mid = Math.floor((end+start)/2);
      if(stop++ == array.length){
              throw new Error("This an infinit");
          }
     
    }
    
    return array[end]
    
  }
  
  console.log(minSorted(["Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"]))