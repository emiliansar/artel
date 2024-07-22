let form = document.querySelector(".project--menu");
let name = document.querySelector(".input--list__input--name");
let tel = document.querySelector(".input--list__input--tel");
let email = document.querySelector(".input--list__input--email");
// let span = document.querySelectorAll(".input--list__item span");
// let input = document.querySelectorAll(".input--list__input");

// let func = (elem, event) => {
// 	event.preventDefault();

// };

// let arrayNullValue = [];

form.addEventListener("submit", (event) => {
	// span.forEach(el => el.style.display = "none");
	if (name.value == "" & tel.value == "" & email.value == "") {
		event.preventDefault();
		document.querySelector(".input--list__item span").style.display = "inline";
	} else if (name.value == "") {
		event.preventDefault();
		document.querySelector(".error--name").style.display = "inline";
	} else if (tel.value == "") {
		event.preventDefault();
		document.querySelector(".error--tel").style.display = "inline";
	} else if (email.value == "") {
		event.preventDefault();
		document.querySelector(".error--email").style.display = "inline";
	}
	// input.forEach(function (elem) {
	// 	(elem.value == "") ? func(elem, event) :
	// 		console.log(elem);
	// });
	// for (let i = 0; i < arrayNullValue.length; i++) {
	// 	console.log(`array ${arrayNullValue[i]}`);
	// }
});