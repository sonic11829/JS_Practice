
const firstNameBoy = ['Seth', 'Cody', 'Josey', 'Gabe', 'Eli']
const firstNameGirl = ['Amber', 'Hannah', 'Mae', 'Grace', 'Micah']
const lastName = ['Neal', 'Piper', 'Carlson']

display1 = function(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(`My name is ${arr[i]}.`)
  }
}

display1(firstNameBoy)
display1(firstNameGirl)
display1(lastName)

display2 = function(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(`${arr[i]} is a name.`)
  }
}

display2(firstNameBoy)
display2(firstNameGirl)
display2(lastName)
