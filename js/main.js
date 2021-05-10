$(document).ready(function () {
	const swiper = new Swiper('.swiper-container', {
		speed: 400,
		spaceBetween: 100,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},
	});
	// ============== bureger=================
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.header__links').click(function (event) {
			$('.header__burger, .header__menu').removeClass('active');
		})
	});
	// cansel restart page when submiting form
	$('#form-submit').click(function (event) {
		event.preventDefault();
	});
});