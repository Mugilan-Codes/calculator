const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const operate = (operator, a, b) => operator(a, b);

const numbers__button = document.querySelectorAll('#buttons .number');
const resultDisplay__div = document.getElementById('result');

let currValue = '',
  prevValue = '',
  operator;
const fillDisplay = function () {
  // prevents two or more decimal points
  if (currValue.includes('.') && this.value === '.') return;

  currValue += this.value;

  resultDisplay__div.textContent = currValue;
};

numbers__button.forEach((number) =>
  number.addEventListener('click', fillDisplay)
);
