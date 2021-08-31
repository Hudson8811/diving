$(window).on('load', function() {
	let tripEl = document.querySelector('.__js_trip-carousel');

	if (tripEl) {
		initTripCarousel();

		function initTripCarousel() {
			let tripCarousel = new Swiper(tripEl, {
				slidesPerView: 2,
				speed: 300,
				spaceBetween: 24,
				loop: true,
				navigation: {
					prevEl: '.trip__prev',
					nextEl: '.trip__next'
				},
			});
		}
	}
})