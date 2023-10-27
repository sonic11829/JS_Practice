
const hat = ["ball cap", "snow hat", "beenie", "none"]
const shirt = ["t-shirt", "sweater", "\'wife beater\'", "none"]
const pant = ["jeens", "snow pants", "shorts", "swim suit"]
const shoes = ["tennis shoes", "boots", "velcro shoes", "swim shoes"]
const coat = ["jacket", "parka", "vest", "life jacket"]

/* each function made is specific to only allow 1 array.
 the first part of the if statement in each one declares if it's >true< or x array is not
 equal to array then to show a comment in the console.
 the second part of the if statement if the array is >false< or equal to x array then 
 loop through the array and show each element in it in the console. */
outfitHat = function(arr){
  if(arr !== hat){
    console.log("not a hat")
  } else {
    console.log(arr)
  }
}

outfitShirt = function(arr){
  if(arr !== shirt){
    console.log("not a shirt")
  } else {
    console.log(arr)
  }
}

outfitPant = function(arr){
  if(arr !== pant){
    console.log("not a pant")
  } else {
    console.log(arr)
  }
}

outfitShoes = function(arr){
  if(arr !== shoes){
    console.log("not shoes")
  } else {
    console.log(arr)
  }
}

outfitCoat = function(arr){
  if(arr !== coat){
    console.log("not a coat")
  } else {
    console.log(arr)
  }
}

/* these functions being called are passing in the arrays that in the if statements will be false and 
 display the elements of the arrays in the console */
outfitHat(hat)
outfitShirt(shirt)
outfitPant(pant)
outfitShoes(shoes)
outfitCoat(coat)

/* these functions being called are passing in arrays taht in the if statements will be true and 
 display a message instead. the message displayed will be the same no matter what array you pass in
 as long as it's not the arrays that match the functions accordingly */
outfitHat(shirt)
outfitShirt(pant)
outfitPant(shoes)
outfitShoes(coat)
outfitCoat(hat)
