$(window).on('load', function() {

	if ($('.__js_trip-carousel').length) {
		initTripCarousel();
	}

    function initTripCarousel() {
        $('.__js_trip-carousel').each(function (){
            let slideCount = $(this).find('.trip-card').length;
            let loop = true;
            let centeredSlides = false;

            if (slideCount <= 1){
                loop = false;
                $(this).addClass('hide-btns');
                centeredSlides = true;
            }

            let tripCarousel = new Swiper(this, {
                slidesPerView: 1,
                speed: 300,
                spaceBetween: 14,
                loop: loop,
                centeredSlides: centeredSlides,
                navigation: {
                    prevEl: '.trip__prev',
                    nextEl: '.trip__next'
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24
                    },
                }
            });
        })
    }
})