// script.js
const redSlider = document.getElementById('red');
const blueSlider = document.getElementById('blue');
const yellowSlider = document.getElementById('yellow');
const redValue = document.getElementById('red-value');
const blueValue = document.getElementById('blue-value');
const yellowValue = document.getElementById('yellow-value');
const colorBox = document.getElementById('color-box');
const rgbValue = document.getElementById('rgb-value');
const hexValue = document.getElementById('hex-value');
const resetButton = document.getElementById('reset');

function updateColor() {
  const red = redSlider.value;
  const blue = blueSlider.value;
  const yellow = yellowSlider.value;

  // Update slider values
  redValue.textContent = red;
  blueValue.textContent = blue;
  yellowValue.textContent = yellow;

  // Convert RGB to HEX
  const rgb = `rgb(${red}, ${blue}, ${yellow})`;
  const hex = rgbToHex(red, blue, yellow);

  // Update preview box and values
  colorBox.style.backgroundColor = rgb;
  rgbValue.textContent = rgb;
  hexValue.textContent = hex;
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

redSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);
yellowSlider.addEventListener('input', updateColor);

resetButton.addEventListener('click', () => {
  redSlider.value = 0;
  blueSlider.value = 0;
  yellowSlider.value = 0;
  updateColor();
});

// Initialize
updateColor();
