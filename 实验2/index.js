; (() => {
  const nav_a = document.querySelector('#nav-a');
  const bar_a = document.querySelector('#bar-a');
  const nav_1 = document.querySelector('#nav-1');
  const nav_2 = document.querySelector('#nav-2');

  nav_a.addEventListener('click', (e) => {
    if (e.target.href) {
      nav_1.innerText = e.target.innerText;
    }
  });

  bar_a.addEventListener('click', (e) => {
    if (e.target.href) {
      nav_2.innerText = e.target.innerText;
    }
  });
})();