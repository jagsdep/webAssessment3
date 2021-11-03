// const form = document.querySelector('section')

// const colorBtn = document.querySelector('#color')
// colorBtn.addEventListener('click', () => {
//   form.textContent = "Orange";
// });

// const placeBtn = document.querySelector('#place')
// placeBtn.addEventListener('click', () => {
//   form.textContent = "Greece";
// });

// const ritualBtn = document.querySelector('#ritual')
// ritualBtn.addEventListener('click', () => {
//   form.textContent = "praying";
// });




const colorBtn = document.querySelector('.button')
function color () {
  
  colorBtn.textContent = "My Favorite Color"
  alert('orange')

}

colorBtn.addEventListener('click', color);




const placeBtn = document.querySelector('.button2')
function place (){
 
  placeBtn.textContent = "My Favorite Place"
  alert('Beach')
}

placeBtn.addEventListener('click', place);


const ritualBtn = document.querySelector('.button3')

function ritual (){
 
  ritualBtn.textContent = "My Favorite Ritual"
  alert('Practice')
}


ritualBtn.addEventListener('click', ritual)


