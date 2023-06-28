// Here is the code for my counter-app:
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

// function that increases the number by one
function increment() {
    count += 1
    countEl.textContent = count
}

// function that let you store the previous count
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

// function that let you delete the stored data
function reset() {
    saveEl.textContent = ""
}


// Unit converter:
const fromUnit = document.getElementById("from");
const toUnit = document.getElementById("to");
let button = document.getElementById("convertBtn");

// the function that runs when the convert button is pressed
function convert() {
  const inputValue = parseFloat(document.getElementById("input").value);
  const fromUnitValue = document.getElementById("from").value;
  const toUnitValue = document.getElementById("to").value;
  let result;

//conditionals that makes the right convertion happen
  if (fromUnitValue === "meters" && toUnitValue === "kilometers") {
    result = inputValue / 1000;
  } else if (fromUnitValue === "meters" && toUnitValue === "miles") {
    result = inputValue * 0.000621371;
  } else if (fromUnitValue === "kilometers" && toUnitValue === "meters") {
    result = inputValue * 1000;
  } else if (fromUnitValue === "kilometers" && toUnitValue === "miles") {
    result = inputValue * 0.621371;
  } else if (fromUnitValue === "miles" && toUnitValue === "meters") {
    result = inputValue * 1609.34;
  } else if (fromUnitValue === "miles" && toUnitValue === "kilometers") {
    result = inputValue * 1.60934;
  } else {
    result = "There must be an error";
  }

  document.getElementById("result").textContent = result.toFixed(2);
}

// function that disables the button if two of the same values are chosen
function sameUnits() {
  if (fromUnit.value === toUnit.value) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}