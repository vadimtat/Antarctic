export function initForms() {
  const forms = document.querySelectorAll('form');

  forms.forEach(initForm);
}

function initForm(form) {
  const phoneInput = form.querySelector('.phone-us');

  form.addEventListener('submit', (event) => {
    const phone = phoneInput.value;
    const isValid = checkPhone(phone);
    if (isValid) {
      form.classList.remove('form__error');
      phoneInput.classList.remove('form__error');
    } else {
      phoneInput.classList.add('form__error');
      event.preventDefault();
    }
  });

  phoneInput.addEventListener('input', () =>
    phoneInput.classList.remove('form__error')
  );
}

function checkPhone(phone) {
  return /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/.test(phone);
}
