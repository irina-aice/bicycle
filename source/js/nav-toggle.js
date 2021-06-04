(function () {
  let navOpenedClass = 'nav--opened';
  let navClosedClass = 'nav--closed';
  let pageNavOpenedClass = 'page--nav-opened';
  let logoHiddenClass = 'hidden';

  let page = document.querySelector('.page');
  let nav = document.querySelector('.nav');
  let navToggle = document.querySelector('.nav__toggle');
  let logo = document.querySelector('.logo');

  if (!page || !nav || !navToggle || !logo) {
    return false;
  }

  nav.classList.add(navClosedClass);

  const open = function() {
    nav.classList.remove(navClosedClass);
    nav.classList.add(navOpenedClass);
    logo.classList.add(logoHiddenClass);
    page.classList.add(pageNavOpenedClass);
  }

  const close = function() {
    nav.classList.add(navClosedClass);
    nav.classList.remove(navOpenedClass);
    logo.classList.remove(logoHiddenClass);
    page.classList.remove(pageNavOpenedClass);
  }

  navToggle.addEventListener('click', function () {
    if (nav.classList.contains(navClosedClass)) {
      open();
    } else {
      close();
    }
  });
})();
