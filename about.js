console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
	
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


// Image.addEventListener("mouseover", (event) {
// 	// highlight the mouseover target
// 	alert('compliment');
  

// })

function cat(event){

	document.getElementById('cat').src = "andriyko-podilnyk-RCfi7vgJjUY-unsplash.jpg";
	alert("give the user a compliment")


}

document.getElementById('cat').addEventListener('mouseover', cat);