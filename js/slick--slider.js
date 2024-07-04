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
});