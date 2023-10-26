
const rifle = ["M4A1", "AK-47", "STG-44", "M14", "M16a4", "G3", "G36C"]
const sniper = ["Dragunov", "M21", "R700", "M40A3", "Barret .50cal"]
const shotgun = ["M1014", "W1200"]
const lmg = ["M249", "RPD", "M60E4"]
const smg = ["MP5", "AK-47u", "P90", "Skorpion", "Mini-Uzi"]
const handgun = ["X16", "1911", ".357", "M19", ".50 GS", "Renetti", "Sykov"]
const launcher = ["PILA", "Strela-P", "JOKR", "RPG-7"]

/* primaryWeapon uses == and || to show if array is equal to ___ OR ___ then console.log("not primary weapon") */
primaryWeapon = function(array){
  if(array == handgun || array == launcher){
    console.log("This is not a primary weapon!")
  } else {
    for(let i = 0; i < array.length; i++){
      console.log(`The ${array[i]} is your primary weapon`)
    }
  }
}

/* secondaryWeapon uses !== and && to show if array is NOT equal to ___ AND ___ then console.log("not secondary weapon") */
secondaryWeapon = function(arr){
  if(arr !== handgun && arr !== launcher){
    console.log("This is not a secondary weapon!")
  } else {
    for(let i = 0; i < arr.length; i++){
      console.log(`The ${arr[i]} is your secondary weapon`)
    }
  }
}

primaryWeapon(rifle)
primaryWeapon(sniper)
primaryWeapon(shotgun)
primaryWeapon(lmg)
primaryWeapon(smg)
primaryWeapon(handgun)
primaryWeapon(launcher)
secondaryWeapon(handgun)
secondaryWeapon(launcher)
secondaryWeapon(rifle)
secondaryWeapon(sniper)
secondaryWeapon(shotgun)
secondaryWeapon(lmg)
secondaryWeapon(smg)
