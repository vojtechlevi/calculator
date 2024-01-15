const screen = document.querySelector(".screen");
const calculator = document.querySelector(".calculator");
const keys = document.querySelectorAll(".button");

let firstValue;
let secondValue;
let step = 0;
let operation;
let result = 0;

let numArray = [];
let secondNumArray = [];

function getNumber(num) {
  if (step === 0 || step === 1) {
    numArray.push(num);
    step = 1;
    firstValue = Number(numArray.join(""));
    screen.textContent = firstValue;
  } else if (step === 2) {
    secondNumArray.push(num);
    secondValue = Number(secondNumArray.join(""));
    screen.textContent = secondValue;
  }
}

function getDot() {
  screen.textContent += ".";
}

function getOperator(op) {
  step = 2;
  operation = op;
  screen.textContent += op;
}

function clearDisplay() {
  screen.textContent = 0;
  firstValue = null;
  secondValue = null;
  step = 0;
  operation = null;
  result = 0;
  numArray = [];
  secondNumArray = [];
}

const calculateEquals = () => {
  if (operation === "+") {
    result = firstValue + secondValue;
    screen.textContent = result;
  } else if (operation === "-") {
    result = firstValue - secondValue;
    screen.textContent = result;
  } else if (operation === "*") {
    result = firstValue * secondValue;
    screen.textContent = result;
  } else if (operation === "/") {
    result = firstValue / secondValue;
    screen.textContent = result;
  } else if (operation === "%") {
    result = firstValue % secondValue;
    screen.textContent = result;
  }
};
