window.addEventListener('load', () => {
  const productsPreviews = document.querySelectorAll('.products-grid__item');
  const showMoreProductsBtn = document.querySelector('.__js_show-more-products');

  if (showMoreProductsBtn && productsPreviews) {
    showMoreProductsBtn.onclick = () => {
      productsPreviews.forEach(it => it.classList.remove('hide'));
      showMoreProductsBtn.style.display = 'none';
    }
  }
});