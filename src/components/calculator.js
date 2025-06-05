// import { addAtRoot } from "../tools/domFunctions";

// const operators = [["1", "2", "3", "+"], ["4", "5", "6", "-"], ["7", "8", "9", "*"], ["/", "0", ".", "="]];

// function calculate() {

//   const superContainer = document.querySelector(".super-container-calculator");
//   const containerInput = document.querySelector(`#${superContainer.getAttribute("data-target")}`);
//   const input = containerInput.querySelector("input")
//   const display = document.querySelector(".display-input");
  
//   let value = eval(display.value || "")
//   input.value = `R$ ${String(value.toFixed(2)).replace(".", ",")}`
//   display.value = value;
// }

// function insertValueAtDisplay(value) {
//   const display = document.querySelector(".display-input");
//   if (!display.value) {
//     display.value = "";
//   }
//   display.value += value;

// }

// function createCalculatorButtons() {
//   const superContainer = document.createElement("div");
//   superContainer.className = "super-container-calculator none";

//   const container = document.createElement("div");
//   container.className = "container-calculator";

//   const buttonClose = document.createElement("button");
//   buttonClose.className = "button-close-calculator";
//   buttonClose.innerHTML = "X";
//   buttonClose.addEventListener("click", () => {
//     superContainer.classList.add("none")
//   })
//   container.appendChild(buttonClose)

//   const display = document.createElement("div");
//   display.className = "container-display";

//   const displayInput = document.createElement("input");
//   displayInput.className = "display-input";
//   displayInput.type = "button";

//   const clearButton = document.createElement("input");
//   clearButton.className = "clear-input";
//   clearButton.type = "button";
//   clearButton.value = "C"

//   display.appendChild(displayInput);
//   display.appendChild(clearButton);
//   container.appendChild(display);

//   for (let row of operators) {
//     const rowContainer = document.createElement("div");
//     rowContainer.className = "calculator-row";
//     for (let column of row) {
//       const input = document.createElement("input");
//       input.className = "input-button";
//       input.type = "button";
//       input.value = column;
//       rowContainer.appendChild(input);
//     }
//     container.appendChild(rowContainer);
//   }

//   superContainer.appendChild(container);
//   addAtRoot(superContainer);
// }

// function digitalButtonsEvents() {
//   const calculatorButtons = document.querySelectorAll(".input-button");
//   const clearButton = document.querySelector(".clear-input");
//   const display = document.querySelector(".display-input")
//   clearButton.addEventListener("click", () => display.value = "")

//   for (let button of calculatorButtons) {
//     const value = button.value
//     if (value !== "=") {
//       button.addEventListener("click", () => insertValueAtDisplay(value));
//     } else if (value === "=") {
//       button.addEventListener("click", calculate);
//     }
//   }


// }

// function keyboardEvents() {
//   const containerCalculator = document.querySelector(".super-container-calculator")
//   document.addEventListener("keydown", (e) => {
//     e.preventDefault()
//     const containerClasses = containerCalculator.classList;
//     if (!containerClasses.contains("none")) {

//       const display = document.querySelector(".display-input");
//       if (!display.value) {
//         display.value = "";
//       }

//       for (let row of operators) {
//         for (let operator of row) {
//           if (e.key === operator && operator !== "=") {
//             display.value += operator;
//           }
//         }
//       }

//       if (e.key === "Backspace") {
//         display.value = display.value.substring(0, display.value.length - 1);
//       }

//       if (e.key === "Enter") {
//         calculate()
//       }

//       if (e.key === "Delete") {
//         display.value = ""
//       }
//       if(e.key === 'Escape'){
//         const superContainer = document.querySelector(".super-container-calculator");
//         superContainer.classList.add("none") 
//       }
//     }
//   })
// }

// function closeCalculatorEvent() {
//   document.addEventListener("click", (event) => {
//     const caulculatorComponent = document.querySelector(".container-calculator")

//     if (!caulculatorComponent.contains(event.target) && !event.target.closest(".open-calculator-button")) {
//       const containerCalculator = caulculatorComponent.parentNode;
//       containerCalculator.classList.add("none")
//     }

//   })
// }

// function addEventsAtCalculator() {
//   digitalButtonsEvents()
//   keyboardEvents()
// }


// export default function calculator() {

//   createCalculatorButtons();
//   addEventsAtCalculator();
//   closeCalculatorEvent()
// }