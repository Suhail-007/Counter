let output = document.querySelector('[data-output]');

let buttonsDiv = document.querySelector('[data-btns-div]');

let counter = 0;
	 
buttonsDiv.addEventListener('click', (e) => {
		if (e.target.innerHTML === 'Increase') {
		  	counter++
				output.innerText = counter;
		}
		if (e.target.innerHTML === 'Decrease') {
				counter--
				output.innerText = counter;
		}
		if (e.target.innerHTML === 'Reset') {
				counter = 0;
				output.innerText = counter;
		}
		
		if (counter == 0)	output.style.color = "black";
		if (counter > 0) output.style.color = "green";
		if (counter < 0) output.style.color = "red";
})

let h1 = document.querySelector('h1');
window.addEventListener('DOMContentLoaded', () => {
		h1.classList.add('animateHeading');
		output.classList.add('animateInit')
})
