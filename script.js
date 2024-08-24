// Screen
const currentScreen = document.querySelector(".current-num");
const prevScreen = document.querySelector(".previous-num");

// Buttons
const numButtons = document.querySelectorAll("button[class='button num']");
const operatorButtons = document.querySelectorAll("button[class='button op']");
const cancelButton = document.querySelector("button[class='button cancel']");
const deleteButton = document.querySelector("button[class='button del'] ");

let prevNum = "";
let currentNum = "";
let operator = "";
let result;

numButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentNum.length > 10) alert("maximun input legnth reached!");
    currentNum = `${currentNum}${btn.dataset.value}`;

    renderToCurrentScreen(currentNum);
  });
});

operatorButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentNum === undefined || currentNum === null) return;
    if (
      btn.dataset.value === "+" ||
      btn.dataset.value === "-" ||
      btn.dataset.value === "*" ||
      btn.dataset.value === "/" ||
      btn.dataset.value === "%"
    ) {
      if (operator !== "") {
        operate(prevNum, operator, currentNum);
        renderToPrevScreen(result);
        currentNum = result;
        moveCurrentNumToPrevNum();
        clearScreen(currentScreen);
        operator = `${btn.dataset.value}`;
      } else {
        renderToPrevScreen(currentNum);
        moveCurrentNumToPrevNum();
        clearScreen(currentScreen);
        operator = `${btn.dataset.value}`;
      }
    } else {
      operate(prevNum, operator, currentNum);
    }
  });
});

cancelButton.addEventListener("click", () => {
  clearScreen(currentScreen);
  clearScreen(prevScreen);
  clearPrevNum();
  clearCurrentNum();
  clearOperator();
});

deleteButton.addEventListener("click", () => {
  currentNum = currentNum.slice(0, -1);
  renderToCurrentScreen(currentNum);
});

// FUNCTIONS

function add(operand1, operand2) {
  return parseInt(operand1) + parseInt(operand2);
}

function subtract(operand1, operand2) {
  return parseInt(operand1) - parseInt(operand2);
}

function multiply(operand1, operand2) {
  return parseInt(operand1) * parseInt(operand2);
}

function divide(operand1, operand2) {
  return parseInt(operand1) / parseInt(operand2);
}

function modulo(operand1, operand2) {
  return parseInt(operand1) % parseInt(operand2);
}

function operate(operand1, operator, operand2) {
  if (operator === "+") {
    result = add(operand1, operand2);
  } else if (operator === "-") {
    result = subtract(operand1, operand2);
  } else if (operator === "*") {
    result = multiply(operand1, operand2);
  } else if (operator === "/") {
    result = divide(operand1, operand2);
  } else if (operator === "%") {
    result = modulo(operand1, operand2);
  }

  clearScreen(prevScreen);
  renderToCurrentScreen(result);
}

function renderToCurrentScreen(element) {
  currentScreen.innerText = element;
}

function renderToPrevScreen(element) {
  prevScreen.innerText = element;
}

function moveCurrentNumToPrevNum() {
  prevNum = currentNum;
  currentNum = "";
}

function clearScreen(target) {
  target.innerHTML = "";
}

function clearPrevNum() {
  prevNum = "";
}

function clearCurrentNum() {
  currentNum = "";
}

function clearOperator() {
  operator = "";
}
