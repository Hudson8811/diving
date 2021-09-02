$(window).on('load', function() {
	const elems = document.querySelectorAll('.__js_recommend-carousel');

	elems.forEach((elem, index) => {
		elem.classList.add('__js_recommend-carousel-' + (index + 1));

		const options = {
			slidesPerView: 1,
			speed: 300,
			spaceBetween: 15,
			observer: true,
			observeParents: true,
			pagination: {
				el: document
						.querySelector('.__js_recommend-carousel-' + (index + 1) + ' .recommend__pagination'),
				type: 'bullets',
				clickable: true
			},
			navigation: {
				prevEl: document
						.querySelector('.__js_recommend-carousel-' + (index + 1))
						.parentElement.querySelector(' .recommend__prev'),
				nextEl: document
						.querySelector('.__js_recommend-carousel-' + (index + 1))
						.parentElement.querySelector(' .recommend__next')
			},
			breakpoints: {
				768: {
					slidesPerView: 2
				},
				1280: {
					slidesPerView: 3,
					spaceBetween: 25
				},
			}
		};

		if (elem) {
			initRecommendCarousel(elem);

			function initRecommendCarousel(el) {
				let recommendCarousel = new Swiper(el, options);
			}
		}
	});
})