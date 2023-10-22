// Get references to the Celsius and Fahrenheit input fields
const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");

// Set focus to the Celsius input field when the page loads
window.addEventListener("load", () => celsius.focus());

// Convert Celsius to Fahrenheit and Kelvin when Celsius value changes
celsius.addEventListener("input", () => {
  fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2);
  kelvin.value = (parseFloat(celsius.value) + 273.15).toFixed(2);
  // Clear Fahrenheit and Kelvin input when Celsius input is empty
  if (!celsius.value) {
    fahrenheit.value = "";
    kelvin.value = "";
  }
});

// Convert Fahrenheit to Celsius and Kelvin when Fahrenheit value changes
fahrenheit.addEventListener("input", () => {
  celsius.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(2);
  kelvin.value = (((fahrenheit.value - 32) * 5) / 9 + 273.15).toFixed(2);
  // Clear Celsius and Kelvin input when Fahrenheit input is empty
  if (!fahrenheit.value) {
    celsius.value = "";
    kelvin.value = "";
  }
});

// Convert Kelvin to Celsius and Fahrenheit when Kelvin value changes
kelvin.addEventListener("input", () => {
  celsius.value = (kelvin.value - 273.15).toFixed(2);
  fahrenheit.value = (((fahrenheit.value - 273.15) * 9) / 5 + 32).toFixed(2);
  // Clear Celsius and Fahrenheit input when Fahrenheit input is empty
  if (!kelvin.value) {
    celsius.value = "";
    fahrenheit.value = "";
  }
});
