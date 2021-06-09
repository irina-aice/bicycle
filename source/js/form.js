'use strict';

(function () {
  const form = document.querySelector('.form');

  if (!form) {
    return false;
  }

  const nameInput = form.querySelector('[name="name"]');
  const phoneInput = form.querySelector('[name="phone"]');

  if (!nameInput || !phoneInput) {
    return false;
  }

  function addName() {
    const oldValue = nameInput.value;
    let newValue = '';

    for(let i = 0; i < oldValue.length; i++) {
      const char = oldValue[i];

      if (
        (char >= '0' && char <= '9')
        || char === '('
        || char === ')'
        || char === '+'
        || char === '_'
        || char === '.'
        || char === ','
      ) {
        continue;
      }
      newValue +=char;
    }

    nameInput.value = newValue;
  }

  function addPhone() {
    const oldValue = phoneInput.value;
    let newValue = '';

    for(let i = 0; i < oldValue.length; i++) {
      const char = oldValue[i];

      if (
        (char < '0' || char > '9')
        && char !== '('
        && char !== ')'
        && char !== '+'
        && char !== '-'
        && char !== ' '
      ) {
        continue;
      }
      newValue +=char;
    }

    phoneInput.value = newValue;
  }

  nameInput.addEventListener('input', addName);
  phoneInput.addEventListener('input', addPhone);

})();
