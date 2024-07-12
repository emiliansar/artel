$(document).ready(function () {
	$(".reviews--slider").slick({
		arrows: false,
		dots: true,
		slidesToShow: 2,
		draggable: true,
		// canterMode: true,
		infinite: false,
		focusOnSelect: true,
		variableWidth: true,
	});
	$(".reviews--slider").on('wheel', function (e) {
		e.preventDefault();
		if (e.originalEvent.deltaY > 0) {
			$(this).slick('slickNext');
			console.log(e.originalEvent.deltaY);
		} else {
			$(this).slick('slickPrev');
			console.log(e.originalEvent.deltaY);
		}
	});
	$(".o--w__slider").slick({
		arrows: false,
		dots: false,
		slidesToShow: 2,
		infinite: false,
		focusOnSelect: true,
		waitForAnimate: true,
		variableWidth: true,
	});
	$(".o--w__slider").on('wheel', function (e) {
		e.preventDefault();
		if (e.originalEvent.deltaY > 0) {
			$(this).slick('slickNext');
			console.log(e.originalEvent.deltaY);
		} else {
			$(this).slick('slickPrev');
			console.log(e.originalEvent.deltaY);
		}
	});
	$(".o--w__slider").on('afterChange', function (event, slick, currentSlide) {
		$(".current--slide").text(`${currentSlide + 1}`)
	});
	$(".worker--text__slider").slick({
		arrows: false,
		dots: false,
		slidesToShow: 1,
		infinite: false,
		waitForAnimate: false,
		vertical: true,
		verticalSwiping: true,
		autoplaySpeed: 100000,
		asNavFor: ".worker--images__slider",
	});
	$(".worker--text__slider").on('wheel', function (e) {
		e.preventDefault();
		if (e.originalEvent.deltaY > 0) {
			$(this).slick('slickNext');
			console.log(e.originalEvent.deltaY);
		} else {
			$(this).slick('slickPrev');
			console.log(e.originalEvent.deltaY);
		}
	});
	$(".worker--images__slider").slick({
		arrows: false,
		dots: false,
		slidesToShow: 1,
		infinite: false,
		waitForAnimate: false,
		vertical: true,
		verticalSpacing: 32,
		verticalSwiping: true,
		autoplaySpeed: 100000,
		asNavFor: ".worker--text__slider",
	});
	$(".worker--images__slider").on('wheel', function (e) {
		e.preventDefault();
		if (e.originalEvent.deltaY > 0) {
			$(this).slick('slickNext');
			console.log(e.originalEvent.deltaY);
		} else {
			$(this).slick('slickPrev');
			console.log(e.originalEvent.deltaY);
		}
	});
	$(".worker--images__slider").on("afterChange", function (event, slick, currentSlide) {
		$(".worker--counter__current").text(`${currentSlide + 1} `);
	});
});