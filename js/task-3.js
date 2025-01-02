const inputText = document.querySelector('input#name-input');
const outputText = document.querySelector('span#name-output');

inputText.addEventListener('input', event => {
  const trimmedValue = event.currentTarget.value.trim();
  outputText.textContent = trimmedValue || 'Anonymous';
});
