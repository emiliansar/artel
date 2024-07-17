let form = document.querySelector(".project--menu");
let name = document.querySelector(".input--list__input--name");
let tel = document.querySelector(".input--list__input--tel");
let email = document.querySelector(".input--list__input--email");

form.addEventListener("submit", (event) => {
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
});