const integer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

add = function(arr){
  for(let i = 0; i < arr.length; i++){
    total = arr[i] + i+1
    console.log(total)
  }
}

add(integer)