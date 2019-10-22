function mergeSort(array) { //if array = [5, 4, 3, 2, 1]
  if(array.length===0 || array.length===1){
  return array
  }
  let arrOfArrays = reduce(array) // [[5], [4], [3], [2], [1]]
  let arrayAfterCompare = compare(arrOfArrays) // [[4, 5], [2,3], [1]]
  while (arrayAfterCompare.length>1){
    arrayAfterCompare = compare(arrayAfterCompare)
  }
  return arrayAfterCompare[0];
}

function reduce(arr){
  //this function produces an array of single element arrays
  let result = []
  arr.forEach((currentVal)=>{
    let arrEl = [];
    arrEl.push(currentVal)
    result.push(arrEl)
  })
  return result
}

function compare(arrOfArr){
  debugger;
  if(arrOfArr.length===1){
    return arrOfArr[0]
  } else {
    const result = []
    for (let i=0; i<=arrOfArr.length-1; i+=2){
      if(arrOfArr[i+1]){
        let currentVal = arrOfArr[i]
        let nextVal = arrOfArr[i+1]
        let mergedArr = merge(currentVal, nextVal)
        resultArr = []
        result.push(mergedArr)
      } else {
        result.push(arrOfArr[i])
      }
    }
    return result
  }
}



let resultArr = []
function merge (arr1, arr2){
  if(arr1.length===0){
    arr2.forEach((currentVal)=> resultArr.push(currentVal))
    return resultArr
    // return resultArr //returns [2,3]
  }
  if(arr2.length===0){
    arr1.forEach((currentVal)=> resultArr.push(currentVal))
    return resultArr
  } else {
    if (arr1[0]<=arr2[0]){
      resultArr.push(arr1[0])
      arr1 = arr1.slice(1)
      // console.log(resultArr)
      merge(arr1, arr2)
    } else {
      resultArr.push(arr2[0])
      arr2 = arr2.slice(1)
      // console.log(resultArr)
      merge(arr1, arr2)
    }
  }
  return resultArr;
}

// console.log(compare([[5], [4], [3], [2], [1]]))
// console.log(merge([4, 5], [2, 3]))

console.log(mergeSort([5,4,3,2,1]))
