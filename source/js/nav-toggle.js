'use strict';

(function () {
  const navOpenedClass = 'nav--opened';
  const navClosedClass = 'nav--closed';
  const pageNavOpenedClass = 'page--nav-opened';
  const logoHiddenClass = 'hidden';

  const page = document.querySelector('.page');
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav__toggle');
  const logo = document.querySelector('.logo');

  if (!page || !nav || !navToggle || !logo) {
    return false;
  }

  nav.classList.add(navClosedClass);

  const open = function() {
    nav.classList.remove(navClosedClass);
    nav.classList.add(navOpenedClass);
    logo.classList.add(logoHiddenClass);
    page.classList.add(pageNavOpenedClass);
  };

  const close = function() {
    nav.classList.add(navClosedClass);
    nav.classList.remove(navOpenedClass);
    logo.classList.remove(logoHiddenClass);
    page.classList.remove(pageNavOpenedClass);
  };

  navToggle.addEventListener('click', () => {
    if (nav.classList.contains(navClosedClass)) {
      open();
    } else {
      close();
    }
  });
})();
