
const Jedi = ['Master Yoda', 'Master Obi-Wan', 'Master Mace', 'Master Luke', 'Anikin', 'Ahsoka', 'Master Qui-Gon']
const Sith = ['Darth Sidius', 'Darth Vader', 'Count Duku', 'Darth Maul', 'Savage Opress']
const Inquisitors = [
  'Grand', 
  'The 2nd Sister', 
  'The 3rd Sister', 
  'The 5th Brother', 
  'The 6th Brother', 
  'The 7th Sister', 
  'The 8th Brother',
  'The 9th Sister', 
  'The 10th Brother', 
  'The 13th Sister', 
  'Tualon Yaluna',
  'The Unnamed Inquisitor',
  'Marrok', 
]

display = function(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(`${arr[i]} can use a lightsaber!`)
  }
}

display(Jedi)
display(Sith)
display(Inquisitors)
