function swap(arr, a,b){
  let temp=arr[a];
  arr[a]=arr[b];
  arr[b]=temp
}

function sorted(arr,a,b){
  if(arr[a]>arr[b]) {
    return -1
  }
  else{
    return 1
}
}

function bubbleSort(array) {
  if(array.length===0|| array.length===1){
    return array
  }

  else{
    for(let i=0; i<array.length-1; i++){
      for (let j=0;j<array.length-i-1;j++){
        if(sorted(array,j,j+1)===-1){
          swap(array,j, j+1);
      }
 }
    }
    return array;
  }
  /* your code here */


}

