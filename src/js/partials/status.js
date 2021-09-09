window.addEventListener('load', () => {
  const orderStatus = document.querySelector('.__js_order-status');

  if (orderStatus) {
    const steps = orderStatus.querySelectorAll('.order-status__step');
    const separators = orderStatus.querySelectorAll('.order-status__scale-sep');
    const line = orderStatus.querySelector('.order-status__scale-line');
    const currentStatus = parseInt(orderStatus.dataset.status, 10);
    const ModifierClass = {
      STEP_DONE: 'order-status__step--done',
      STEP_ACTIVE: 'order-status__step--active',
      SEP_DONE: 'order-status__scale-sep--done'
    };

    line.style.width = (currentStatus * 25) + '%';

    steps.forEach((it, index) => {
      if (index + 1 < currentStatus) {
        it.classList.add(ModifierClass.STEP_DONE);
      } else if (index + 1 === currentStatus) {
        it.classList.add(ModifierClass.STEP_ACTIVE);
      }
    });

    separators.forEach((it, index, arr) => {
      if (currentStatus < 4) {
        if (index < currentStatus * 4) {
          it.classList.add(ModifierClass.SEP_DONE);
        }
      } else {
        it.classList.add(ModifierClass.SEP_DONE);
      }
      
    });
  }
});