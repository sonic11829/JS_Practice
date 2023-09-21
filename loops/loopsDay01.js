
const array1 = [1, 2, 3, 4, 5];
const array2 = ['A', 'B', 'C', 'D', 'E'];

/* This loop shows the position of all 5 elements in the arrays that are passed through it. */
function display1(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(`The index is ${i}`)
  }
}

display1(array1)
display1(array2)

/* This loop shows the elements one after another of all 5 elements in the arrays and their position. */
function display2(array){
  for(let i = 0; i < array.length; i++){
    console.log(`The element in position ${i} is ${array[i]}`)
  }
}

display2(array1)
display2(array2)
