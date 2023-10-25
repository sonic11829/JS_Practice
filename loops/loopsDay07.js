
const rifle = ["M16", "AK-47", "Galil", "Aug", "G3A3"]

primaryWeapon = function(array){
  for(let i = 0; i < array.length; i++){
    console.log(`${array[i]} is your primary weapon`)
  }
}

primaryWeapon(rifle)