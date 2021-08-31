$(window).on('load', function() {
	let coursesEl = document.querySelector('.__js_courses-carousel');

	if (coursesEl) {
		initCoursesCarousel();

		function initCoursesCarousel() {
			let coursesCarousel = new Swiper(coursesEl, {
				slidesPerView: 3,
				speed: 300,
				spaceBetween: 25,
				loop: true,
				navigation: {
					prevEl: '.courses__prev',
					nextEl: '.courses__next'
				},
			});
		}
	}
})