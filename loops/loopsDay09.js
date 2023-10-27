
const elements = ["water", "earth", "fire", "air"]

/* This function uses an if statement inside of the for loop. this allows a specific message to be made based on 
  what it's strictly equal to. */
nation = function(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr[0]){
      console.log(`You are a ${arr[i]} bender from the northern ${arr[i]} tribe!`)
    } else if(arr[i] === arr[1]){
      console.log(`You are an ${arr[i]} bender from the city of Ba Sing Se!`)
    } else if(arr[i] === arr[2]){
      console.log(`You are a ${arr[i]} bender from Hama's villiage of the ${arr[i]} nation!`)
    } else {
      console.log(`You are a really old ${arr[i]} bender from a time past. You still look like a child.`)
    }
  }
}

nation(elements)
