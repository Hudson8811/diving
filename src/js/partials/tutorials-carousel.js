$(window).on('load', function() {
    if ($('.__js_tutorials-carousel').length) {
        initTutorialsCarousel();
    }


    function initTutorialsCarousel() {
        $('.__js_tutorials-carousel').each(function (){
            let slideCount = $(this).find('.tutorials__item').length;
            let loopMain = true;
            let loopTablet = true;
            let loopTablet2 = true;
            let loopDesktop = true;
            let allowTouchMove = true;

            if (slideCount <= 1){
                $(this).addClass('hide-btns');
                allowTouchMove = false;
                loopMain = false;
                loopTablet = false;
                loopTablet2 = false;
                loopDesktop = false;
            } else if (slideCount == 2){
                $(this).addClass('hide-btns-640');
                loopTablet = false;
                loopTablet2 = false;
                loopDesktop = false;
            } else if (slideCount == 3){
                $(this).addClass('hide-btns-960');
                loopTablet2 = false;
                loopDesktop = false;
            }

            let tutorialsCarousel = new Swiper(this, {
                slidesPerView: 1,
                speed: 300,
                spaceBetween: 24,
                loop: loopMain,
                allowTouchMove : allowTouchMove,
                navigation: {
                    prevEl: this.nextElementSibling.querySelector('.tutorials__prev'),
                    nextEl: this.nextElementSibling.querySelector('.tutorials__next')
                },
                pagination: {
                    el: this.nextElementSibling.querySelector('.tutorials__pagination'),
                    type: 'bullets',
                    clickable: true
                },
               breakpoints: {
                    640: {
                        loop: loopTablet,
	                    slidesPerView: 2,
                    },
                    960: {
                        loop: loopTablet2,
	                    slidesPerView: 3,
                    },
                    1280: {
                        loop: loopDesktop,
	                    slidesPerView: 4,
                    }
                }
            });
        })
    }
})