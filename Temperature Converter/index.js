const Input = document.querySelector("input");
const selected = document.querySelector("select");
const form = document.querySelector("form");
const value1 = document.querySelector("#value1");
const value2 = document.querySelector("#value2");
const value3 = document.querySelector("#value3");

function printTemp(deg, fah, kel) {
  value1.innerHTML = "Degree: " + deg + "°C";
  value2.innerHTML = "Fahrenheit: " + fah + "°F";
  value3.innerHTML = "Kelvin: " + kel + "K";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = parseFloat(Input.value);
  const tempUnit = selected.value;

  if (isNaN(value)) {
    alert("Please enter a valid number");
    return;
  } else if (tempUnit === "Degree") {
    const fah = (value * 9) / 5 + 32;
    const kel = value + 273.15;

    printTemp(value, fah, kel);
  } else if (tempUnit === "Fahrenheit") {
    const deg = ((value - 32) * 5) / 9;
    const kel = deg + 273.15;

    printTemp(deg, value, kel);
  } else {
    const deg = value - 273.15;
    const fah = (deg * 9) / 5 + 32;

    printTemp(deg, fah, value);
  }
});
