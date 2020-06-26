const FUNCTION_NAMES = {
  add: () => add,
  sub: () => sub,
  mul: () => mul,
  div: () => div,
};

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

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
const operations = document.querySelectorAll('#buttons .operation');

let storedValue = '',
  prevValue = '',
  resultValue,
  currValue = '',
  operator,
  operatorSymbol;

const fillDisplay = function () {
  // prevents two or more decimal points
  if (currValue.includes('.') && this.value === '.') return;

  if (currValue.length > 13) return;

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
  if (operator) {
    historyDisplay__div.textContent = `${prevValue} ${operatorSymbol} ${currValue}`;
    currValue = operate(operator, prevValue, currValue);
    resultDisplay__div.textContent = currValue;
  }

  operator = this.id;
  operatorSymbol = this.value;
  prevValue = currValue;
  currValue = '';
};

operators__button.forEach((operator) =>
  operator.addEventListener('click', calculateAnswer)
);

const performOperation = function () {
  console.log(this.id);
  if (this.id === 'negator') {
    currValue *= -1;
    resultDisplay__div.textContent = currValue;
  }
  if (this.id === 'all-clear') {
    resultDisplay__div.textContent = '0';
    historyDisplay__div.textContent = '';
    currValue = '';
    operator = '';
    prevValue = '';
  }
  if (this.id === 'equal-to') {
    currValue = operate(operator, prevValue, currValue);
    historyDisplay__div.textContent = historyDisplay__div.textContent = `${prevValue} ${operatorSymbol} ${currValue}`;
    resultDisplay__div.textContent = currValue;
    currValue = '';
  }
  if (this.id === 'backspace') {
    currValue = currValue.slice(0, -1);
    resultDisplay__div.textContent = currValue;
  }
};

operations.forEach((operation) =>
  operation.addEventListener('click', performOperation)
);
