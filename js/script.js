const FUNCTION_NAMES = {
  add: () => add,
  sub: () => sub,
  mul: () => mul,
  div: () => div,
  neg: () => neg,
};

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const neg = (a, _) => -a;

const operate = (operator, a, b) => {
  operator = FUNCTION_NAMES[operator]();
  a = Number(a);
  b = Number(b);

  return operator(a, b);
};

const numbers__button = document.querySelectorAll('#buttons .number');
const historyDisplay__div = document.getElementById('history');
const resultDisplay__div = document.getElementById('result');
const operators__button = document.querySelectorAll('#buttons .operator');

let storedValue = '',
  prevValue = '',
  resultValue = '',
  currValue = '',
  operator;

const fillDisplay = function () {
  // prevents two or more decimal points
  if (currValue.includes('.') && this.value === '.') return;

  if (currValue.length > 14) return;

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
  console.log(this.value, this.id);

  storedValue = prevValue;
  prevValue = currValue;
  resultValue = operate(operator, storedValue, prevValue);
  operator = this.value;
  currValue = '';
};

operators__button.forEach((operator) =>
  operator.addEventListener('click', calculateAnswer)
);
