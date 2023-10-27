
const hat = ["ball cap", "snow hat", "beenie", "none"]
const shirt = ["t-shirt", "sweater", "\'wife beater\'", "none"]
const pant = ["jeens", "snow pants", "shorts", "swim suit"]
const shoes = ["tennis shoes", "boots", "velcro shoes", "swim shoes"]
const coat = ["jacket", "parka", "vest", "life jacket"]

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

outfitHat(hat)
outfitShirt(shirt)
outfitPant(pant)
outfitShoes(shoes)
outfitCoat(coat)

outfitHat(shirt)
outfitShirt(pant)
outfitPant(shoes)
outfitShoes(coat)
outfitCoat(hat)
