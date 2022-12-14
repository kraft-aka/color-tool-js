const hexInput = document.getElementById("hex-input");
const sliderText = document.getElementById("slider-text");
const slider = document.getElementById("slider");
const inputColor = document.getElementById("input-color");
const alteredColor = document.getElementById("altered-color");
const alteredColorText = document.getElementById("altered-color-text");
const toggleBtn = document.getElementById("toggleBtn");
const lightenText = document.getElementById("lighten-text");
const darkenText = document.getElementById("darken-text");

// assigns background color taken from input
hexInput.addEventListener("keyup", () => {
  const hexValue = hexInput.value;
  if (!isValid(hexValue)) return;

  inputColor.style.backgroundColor = `#${hexValue}`;
  reset();
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
const rgbToHex = (r, g, b) => {
  const h = ("0" + r.toString(16)).slice(-2);
  const e = ("0" + g.toString(16)).slice(-2);
  const x = ("0" + b.toString(16)).slice(-2);

  return `#${h}${e}${x}`;
};

// checks the num value if it in range from 0 to 255
const increaseWithin0to255 = (hex, amount) => {
  const newHex = hex + amount;

  if (newHex < 0) return 0;
  if (newHex > 255) return 255;

  return newHex;
};

// alter color with percentage
const alterColor = (hex, percentage) => {
  const { r, g, b } = hexToRgb(hex);

  const amount = Math.floor((percentage / 100) * 255);

  const newR = increaseWithin0to255(r, amount);
  const newG = increaseWithin0to255(g, amount);
  const newB = increaseWithin0to255(b, amount);
  return rgbToHex(newR, newG, newB);
};

// eventlistener for slider input
slider.addEventListener("input", () => {
  if (!isValid(hexInput.value)) return;
  sliderText.innerHTML = `${slider.value}%`;
  // checks if the button is toggled
  const valueAddition = toggleBtn.classList.contains("toggled")
    ? -slider.value
    : slider.value;
  const newColor = alterColor(hexInput.value, valueAddition);
  alteredColorText.innerText = `Altered Color: ${newColor}`;
  alteredColor.style.backgroundColor = newColor;
});

// toggles between two states
toggleBtn.addEventListener("click", () => {
  if (toggleBtn.classList.contains("toggled")) {
    toggleBtn.classList.remove("toggled");
    lightenText.classList.remove("unselected");
    darkenText.classList.add("unselected");
  } else {
    toggleBtn.classList.add("toggled");
    lightenText.classList.add("unselected");
    darkenText.classList.remove("unselected");
  }
  reset();
});

// resets the values when the button toggled
const reset = () => {
  slider.value = 0;
  sliderText.textContent = "0%";
  alteredColor.style.backgroundColor = `#${hexInput.value}`;
  alteredColorText.textContent = `Altered Color: ${hexInput.value}`;
};
