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
	let element = document.querySelector(".main-nav__scroll--wrapper");
	let scrollPosition = window.scrollY;

	if (scrollPosition > 100) {
		element.style.display = "block";
	} else {
		element.style.display = "none";
	}
});

let showMore = document.querySelector(".show--more");
let showMoreRemainder = document.querySelector(".show--more__remainder");
let CardListLength = document.querySelectorAll(".project--grid__item").length;
let items = 6;

showMore.addEventListener("click", () => {
	items += 3;
	showMoreRemainder.innerHTML -= 3;
	const array = Array.from(document.querySelector(".project--grid").children);

	const visItems = array.slice(0, items);

	visItems.forEach(el => el.classList.add("project--grid__item--active"));

	if (visItems.length === CardListLength)
		showMore.style.display = "none";
});

let btnBuyProject = document.querySelectorAll("#btnBuyProject");
let buyProject = document.querySelector(".buy--project__wrapper");

btnBuyProject.forEach(function (element) {
	element.addEventListener("click", () => {
		buyProject.classList.toggle("buy--project__wrapper--active");
	});
});