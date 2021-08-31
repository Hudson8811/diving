$(window).on('load', function() {
	const elems = document.querySelectorAll('.__js_recommend-carousel');

	elems.forEach((elem, index) => {
		elem.classList.add('__js_recommend-carousel-' + (index + 1));

		const options = {
			slidesPerView: 3,
			speed: 300,
			spaceBetween: 25,
			observer: true,
			observeParents: true,
			navigation: {
				prevEl: document
						.querySelector('.__js_recommend-carousel-' + (index + 1))
						.parentElement.querySelector(' .recommend__prev'),
				nextEl: document
						.querySelector('.__js_recommend-carousel-' + (index + 1))
						.parentElement.querySelector(' .recommend__next')
			},
		};

		if (elem) {
			initRecommendCarousel(elem);

			function initRecommendCarousel(el) {
				let recommendCarousel = new Swiper(el, options);
			}
		}
	});
})