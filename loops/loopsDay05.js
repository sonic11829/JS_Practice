const integer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

add = function(arr){
  for(let i = 0; i < arr.length; i++){
    total = arr[i] + i+1
    console.log(total)
  }
}

add(integer)

subtract = function(arr){
  for(let i = arr.length; i >= 0; i--){
    total = i+1 - arr[i]
    console.log(total)
  }
}

subtract(integer)