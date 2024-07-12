"use strict";

document.querySelectorAll("#contactsCopy").forEach(function (element) {
	element.addEventListener("click", () => {
		navigator.clipboard.writeText("+79061536104");
	});
});

let burgerMenu = document.querySelectorAll(".burger-menu");
let menu = document.getElementById("menu");

burgerMenu.forEach(function (element) {
	element.addEventListener("click", () => {
		menu.classList.toggle('menu--active');
	});
});

let zoom = document.querySelectorAll(".structure-image__zoom");
let imgCover = document.querySelector(".image--cover");

zoom.forEach(function (element) {
	element.addEventListener("click", () => {
		imgCover.classList.toggle("image--cover--active");
	});
});

let btnStrctr = document.querySelectorAll(".structure-title__btn");
let content = document.querySelectorAll(".structure-content");

btnStrctr.forEach(function (element) {
	element.addEventListener("click", contentOpen);
});

function contentOpen(event) {
	let tabTarget = event.currentTarget;
	let button = tabTarget.dataset.button;

	document.querySelector(`.${button}`).classList.toggle("structure-content__disactive");
	tabTarget.classList.toggle("structure-title__btn--active")
}

let btnProjectMenu = document.querySelectorAll("#btnProjectMenu");

btnProjectMenu.forEach(function (element) {
	element.addEventListener("click", openProjectMenu);
})

function openProjectMenu() {
	document.querySelector(".project--menu__wrapper").classList.toggle("project--menu__wrapper--active");
}

window.addEventListener("scroll", function () {
	let element = document.querySelector(".main-nav__scroll");
	let scrollPosition = window.scrollY;

	if (scrollPosition > 100) {
		element.style.display = "flex";
	} else {
		element.style.display = "none";
	}
});