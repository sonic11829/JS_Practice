
const integer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

/* this add function takes the number of the index and adds it to the next indexed position */
add = function(arr){
  for(let i = 0; i < arr.length; i++){
    total = arr[i] + i+1
    console.log(total)
  }
}

add(integer)

/* this subract function takes the next indexed position and subtracts it from the current number of that index */
subtract = function(arr){
  for(let i = arr.length; i >= 0; i--){
    total = i+1 - arr[i]
    console.log(total)
  }
}

subtract(integer)
