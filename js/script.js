const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const operate = (operator, a, b) => operator(a, b);

const numbers__button = document.querySelectorAll('#buttons .number');
const resultDisplay__div = document.getElementById('result');

const operators__button = document.querySelectorAll('#buttons .operator');

let currValue = '',
  prevValue = '',
  operator;
const fillDisplay = function () {
  // prevents two or more decimal points
  if (currValue.includes('.') && this.value === '.') return;

  if (currValue === '0') {
    currValue = this.value;
  } else {
    currValue += this.value;
  }

  resultDisplay__div.textContent = currValue;
};

numbers__button.forEach((number) =>
  number.addEventListener('click', fillDisplay)
);

const calculateAnswer = function () {
  operator = this.value;
  prevValue = currValue;
  currValue = '0';
};

operators__button.forEach((operator) =>
  operator.addEventListener('click', calculateAnswer)
);
