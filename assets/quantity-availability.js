document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.querySelector('.product-form__submit');
  const quantityContainer = document.querySelector('.product-form__quantity');

  function toggleQuantityClass() {
    if (submitButton && quantityContainer) {
      if (submitButton.disabled) {
        quantityContainer.classList.add('product-form__quantity--disabled');
      } else {
        quantityContainer.classList.remove('product-form__quantity--disabled');
      }
    }
  }

  toggleQuantityClass();

  const observer = new MutationObserver(toggleQuantityClass);
  observer.observe(submitButton, { attributes: true, attributeFilter: ['disabled'] });
});
