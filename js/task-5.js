function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorBody = document.querySelector('body');
const btnColor = document.querySelector('button.change-color');
const colorSpan = document.querySelector('span.color');

btnColor.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  colorBody.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});
