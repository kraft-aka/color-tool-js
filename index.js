const hexInput = document.getElementById("hex-input");
let inputColor = document.getElementById("input-color");

// assigns background color taken from input
hexInput.addEventListener("keyup", () => {
  const hexValue = hexInput.value;
  if (!isValid(hexValue)) return;

  inputColor.style.backgroundColor = `#${hexValue}`;
});

// validates input value
const isValid = (hex) => {
  if (!hex) return false;

  const strippedStr = hex.replace("#", "");
  return strippedStr.length === 3 || strippedStr.length === 6;
};

// converts HEX to RGB
const hexToRgb = (hex) => {
  if (!isValid(hex)) return null;

  let strippedHex = hex.replace("#", "");

  if (strippedHex.length === 3) {
    strippedHex =
      strippedHex[0] +
      strippedHex[0] +
      strippedHex[1] +
      strippedHex[1] +
      strippedHex[2] +
      strippedHex[2];
  }

  const r = parseInt(strippedHex.substring(0, 2), 16);
  const g = parseInt(strippedHex.substring(2, 4), 16);
  const b = parseInt(strippedHex.substring(4, 6), 16);

  return { r, g, b };
};


// converts RGB to HEX

const rgbToHex = (r,g,b) => {
  

  let  h = r.toString(16);
  let e = g.toString(16);
  let x = b.toString(16);

  if (h.length === 1) {
    h[0] + h[0]
  }

  if (e.length === 1) {
    e[0] + e[0]
  }

  if (x.length === 1) {
    x[0] + x[0]
  }

  return `#${h}${e}${x}`
}

console.log(rgbToHex(255, 0, 238));