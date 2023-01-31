'use stríct';

const seedColor = document.getElementById('color-picker');
const colorSelect = document.getElementById('colors-dropdown');
const getColorBtn = document.getElementById('get-color-btn');

const displayArr = document.querySelectorAll('.colors-display');
const hexArray = document.querySelectorAll('.hex-codes');
console.log(hexArray);

getColorBtn.addEventListener('click', () => {
  getColor();
});

// FUNCTION TO GET THE COLORS FROM THE COLOR API
function getColor() {
  const colorCode = seedColor.value.slice(1);
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorCode}&mode=${colorSelect.value}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      displayColors(data);
    });
}

// DISPLAY COLORS AND HEX-CODES
function displayColors(colorObject) {
  for (let i = 0; i < colorObject.colors.length; i++) {
    displayArr[i].style.backgroundColor = colorObject.colors[i].hex.value;
    hexArray[i].textContent = colorObject.colors[i].hex.value;
  }
}

// COPY ON CLICK FUNCTION ON THE HEX-CODES
hexArray.forEach((color) => {
  color.addEventListener('click', () => {
    navigator.clipboard.writeText(color.textContent);
    color.textContent = 'Copied!';
  });
});
