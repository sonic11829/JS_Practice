
const dogs = ['Great Dane', 'Labrador', 'German Shepherd']
const oddNumbers = [1, 3, 5, 7, 9]

display1 = function(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(`The position of this element is ${i}`)
  }
}

display1(dogs)
display1(oddNumbers)

display2 = function(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(`${arr[i]} is in position ${i} of this array.`)
  }
}

display2(dogs)
display2(oddNumbers)
