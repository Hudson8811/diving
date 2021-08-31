$(window).on('load', function() {
	let productsEl = document.querySelector('.__js_products-carousel');

	if (productsEl) {
		initProductsCarousel();

		function initProductsCarousel() {
			let productsCarousel = new Swiper(productsEl, {
				slidesPerView: 4,
				speed: 300,
				spaceBetween: 24,
				loop: true,
				navigation: {
					prevEl: '.products__prev',
					nextEl: '.products__next'
				},
			});
		}
	}
})