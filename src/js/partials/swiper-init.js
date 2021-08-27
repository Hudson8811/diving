
window.addEventListener('load', () => {
  const productsCarousels = document.querySelectorAll('.__js_products-carousel');

  if (productsCarousels.length) {
    productsCarousels.forEach(it => {
      new Swiper(it, {
        speed: 300,
        slidesPerView: 1,
        spaceBetween: 24,
        watchOverflow: true,
        breakpoints: {
          // when window width is >= 480px
          560: {
            slidesPerView: 2
          },
          // when window width is >= 640px
          1080: {
            slidesPerView: 3
          },
          1280: {
            slidesPerView: 4
          }
        },
        navigation: {
          nextEl: '.__js_next',
          prevEl: '.__js_prev',
          disabledClass: 'button--disabled'
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',// 'bullets' | 'fraction' | 'progressbar' | 'custom'
          clickable: true
        },
      });
    });
  }
})