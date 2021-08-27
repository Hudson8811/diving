window.addEventListener('load', () => {
  const tabs = document.querySelectorAll('.tabs__item button');
  const tabContents = document.querySelectorAll('.tab-content');

  if (tabs.length && tabContents.length) {
    tabs.forEach(it => it.addEventListener('click', function() {
      const firstLet = this.dataset.target[0];
      const target = this.dataset.target.slice(1);

      if (document.querySelector(firstLet + target)) {

        tabs.forEach(it => it.parentElement.classList[it === this ? 'add' : 'remove']('active'));

        tabContents.forEach(it => {
          it.classList[it.id === target ? 'add' : 'remove']('active');
        });
      }
    }));
  }
});