const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const operate = (operator, a, b) => operator(a, b);

const numberButtons__div = document.querySelectorAll('#buttons .number');

const displayResult = document.getElementById('display');

let displayValue = '';

const fillDisplay = function () {
  displayValue += this.value;

  displayResult.textContent = displayValue;
};

numberButtons__div.forEach((number) =>
  number.addEventListener('click', fillDisplay)
);
