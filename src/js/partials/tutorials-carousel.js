$(window).on('load', function() {
	let tutorialsEl = document.querySelector('.__js_tutorials-carousel');

	if (tutorialsEl) {
		initTutorialsCarousel();

		function initTutorialsCarousel() {
			let tutorialsCarousel = new Swiper(tutorialsEl, {
				slidesPerView: 1,
				speed: 300,
				spaceBetween: 14,
				loop: true,
				navigation: {
					prevEl: '.tutorials__prev',
					nextEl: '.tutorials__next'
				},
				pagination: {
					el: '.tutorials__pagination',
					type: 'bullets',
					clickable: true
				},
				breakpoints: {
					768: {
						slidesPerView: 2
					},
					1080: {
						slidesPerView: 3,
						spaceBetween: 24
					},
					1280: {
						slidesPerView: 4
					}
				}
			});
		}
	}
})