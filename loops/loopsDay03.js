
const trees = ['oak', 'birch', 'maple', 'dog', 'pine']
const evenNumbers = [2, 4, 6, 8, 10]

/* display1 function is being used to only display the elements position in an array */

display1 = function(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(`This is position ${i} of this array`)
  }
}

display1(trees)
display1(evenNumbers)

/* display2 function is being used to display the elements and the position of those elements in an array */

display2 = function(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(`${arr[i]} is in position ${i} of this array`)
  }
}

display2(trees)
display2(evenNumbers)
