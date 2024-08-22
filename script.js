// Screen
const currentScreen = document.querySelector(".current-num");
const prevScreen = document.querySelector(".previous-num");

// Buttons
const numButtons = document.querySelectorAll("button[class='button num']");

let prevNum = "";
let currentNum = "";

numButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.dataset);
    currentNum = `${currentNum}${btn.dataset.value}`;
    console.log(currentNum);
    render(currentNum, currentScreen);
  });
});

// FUNCTIONS

function add() {}

function subtract() {}

function multiply() {}

function divide() {}

function operate(firstNumber, operand, secondNumber) {}

function render(element, container) {
  container.innerText = element;
}
