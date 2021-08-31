$(window).on('load', function() {
	let tutorialsEl = document.querySelector('.__js_tutorials-carousel');

	if (tutorialsEl) {
		initTutorialsCarousel();

		function initTutorialsCarousel() {
			let tutorialsCarousel = new Swiper(tutorialsEl, {
				slidesPerView: 4,
				speed: 300,
				spaceBetween: 24,
				loop: true,
				navigation: {
					prevEl: '.tutorials__prev',
					nextEl: '.tutorials__next'
				},
			});
		}
	}
})