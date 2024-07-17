let formBuy = document.querySelector(".buy--project__form");
let fcs = document.querySelector(".input--list__input--fcs");
let topTel = document.querySelector(".input--list__input--tel__top");
let address = document.querySelector(".input--list__input--address");

formBuy.addEventListener("submit", (event) => {
	if (fcs.value == "" & topTel.value == "" & address.value == "") {
		event.preventDefault();
		document.querySelector(".buy--project__form .input--list__item span").style.display = "inline";
	} else if (fcs.value == "") {
		event.preventDefault();
		document.querySelector(".error--fcs").style.display = "inline";
	} else if (topTel.value == "") {
		event.preventDefault();
		document.querySelector(".error--tel__top").style.display = "inline";
	} else if (address.value == "") {
		event.preventDefault();
		document.querySelector(".error--address").style.display = "inline";
	}
});

let formDown = document.querySelector(".project--menu__download");
let name = document.querySelector(".input--list__input--name");
let tel = document.querySelector(".input--list__input--tel");
let email = document.querySelector(".input--list__input--email");

formDown.addEventListener("submit", (event) => {
	if (name.value == "" & tel.value == "" & email.value == "") {
		event.preventDefault();
		document.querySelector(".project--menu__download .input--list__item span").style.display = "inline";
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