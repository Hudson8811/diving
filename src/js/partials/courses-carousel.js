$(window).on('load', function() {

    if ($('.__js_courses-carousel-2').length) {
        initCoursesCarousel();
    }

    function initCoursesCarousel() {
        $('.__js_courses-carousel-2').each(function (){
            let slideCount = $(this).find('.courses__item').length;
            let loopMain = true;
            let loopTablet = true;
            let loopDesktop = true;
            let centeredSlidesMobile = false;
            let allowTouchMove = true;

            console.log(slideCount);

            if (slideCount <= 1){
                $(this).addClass('hide-btns');
                loopMain = false;
                loopTablet = false;
                loopDesktop = false;
                centeredSlidesMobile = true;
                allowTouchMove = false;
            } else if (slideCount == 2){
                $(this).addClass('hide-btns-640');
                loopTablet = false;
                loopDesktop = false;
                allowTouchMove = false;
            }

            let coursesCarousel2 = new Swiper(this, {
                slidesPerView: 1,
                spaceBetween: 10,
                speed: 300,
                loop: loopMain,
                centeredSlides: centeredSlidesMobile,
                allowTouchMove : true,
                navigation: {
                    prevEl: '.courses__prev',
                    nextEl: '.courses__next'
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        loop: loopTablet,
                        allowTouchMove : allowTouchMove
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                        loop: loopTablet,
                        allowTouchMove : allowTouchMove
                    },
                    1080: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                        loop: loopDesktop,
                        allowTouchMove : allowTouchMove
                    },
                }
            });
        })
    }


})