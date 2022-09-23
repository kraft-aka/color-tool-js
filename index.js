const hexInput = document.getElementById("hex-input");
let inputColor = document.getElementById('input-color')


// assigns background color taken from input 
hexInput.addEventListener('keyup', () => {
  const hexValue = hexInput.value;
  if (!isValid(hexValue)) return;

  inputColor.style.backgroundColor = `#${hexValue}`;
  
})

// validates input value
const isValid = (hex) => {
  if(!hex) return false;

  const strippedStr = hex.replace('#', '');
  return strippedStr.length === 3 || strippedStr.length === 6
}

// converts HEX to RGB
const hexToRgb = (hex) => {
  return `rgb(${hex.match(/\w\w/g).map(x=>+`0x${x}`)})`;
}


