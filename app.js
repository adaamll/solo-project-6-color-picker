const seedColor = document.getElementById('color-picker'); // GRABBING ELEMENT OF COLOR PICKER
const colorSelect = document.getElementById('colors-dropdown'); // GRABBING ELEMENT OF COLOR SCHEME DROPDOWN
const getColorBtn = document.getElementById('get-color-btn'); // GRABBING ELEMENT OF GET COLOR BUTTON

const dispArray = document.getElementsByClassName('colors-display'); // GRABBING ELEMENT OF COLOR SECTIONS
const hexValArray = document.getElementsByClassName('hex-codes'); // GRABBING ELEMENT OF HEX CODES PARAGRAPHS IN FOOTER

// EVENTLISTENER ON GETCOLOR BUTTON TO TRIGGER API TO SEND COLOR FUNCTION
getColorBtn.addEventListener('click', () => {
  getColor();
});

// FUNCTION TO SEND A REQUEST TO API TO GET DATA FOR CHOSEN COLOR
function getColor() {
  const colorCode = seedColor.value.slice(1); // SLICING THE SEEDCOLOR TO REMOVE THE '#' FROM THE HEXCODE BEFORE WE SEND IT TO THE API
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorCode}&mode=${colorSelect.value}&count=5` // URL IN A TEMPLATE LITERAL WITH VARIABLES FOR CHOSEN COLOR WE SEND TO THE API TO FETCH THE COLORS
  )
    .then((res) => res.json())
    .then((data) => {
      displayColors(data); // CALLING FUNCTION TO DISPLAY RECEIVED DATA FROM THE API ON THE DOCUMENT
    });
}

// FUNCTION TO DISPLAY THE COLORS AND HEXCODES ON THE DOCUMENT
function displayColors(colorObject) {
  // FOR LOOP TO LOOP THROUGH ALL 5 CONTAINERS FOR COLORS AND PARAGRAPHS FOR HEXCODES AND RENDER THEM ON THE DOCUMENT
  for (let i = 0; i < 5; i++) {
    dispArray[i].style.backgroundColor = colorObject.colors[i].hex.value; // SETTING BACKGROUND COLOR ON ALL 5 CONTAINERS
    hexValArray[i].textContent = colorObject.colors[i].hex.value; // SETTING THE HEXCODES AS TEXTCONTENT ON PARAGRAPHS IN FOOTER
    // hexValArray[i].value = colorObject.colors[i].hex.value; // SETTING VALUE FOR COPY ON CLICK
  }
  console.log(colorObject);
}
