
const rifle = ["M4A1", "AK-47", "STG-44", "M14", "M16a4", "G3", "G36C"]
const sniper = ["Dragunov", "M21", "R700", "M40A3", "Barret .50cal"]
const shotgun = ["M1014", "W1200"]
const lmg = ["M249", "RPD", "M60E4"]
const smg = ["MP5", "AK-47u", "P90", "Skorpion", "Mini-Uzi"]

primaryWeapon = function(array){
  for(let i = 0; i < array.length; i++){
    console.log(`${array[i]} is your primary weapon`)
  }
}

primaryWeapon(rifle)
primaryWeapon(sniper)
primaryWeapon(shotgun)
primaryWeapon(lmg)
primaryWeapon(smg)
