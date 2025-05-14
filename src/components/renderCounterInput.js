import { changeValue } from "../tools/numberFunctions.js"

export default function renderCounterInputs() {
  const labels = {"Ocupação total": 50, "Previsão reservas": 0, "Check-in": 0, "Renovação": 0}
  document.querySelector(".root").innerHTML += `<div class="counter-inputs-container container-input"></div>`

  for (const label of Object.keys(labels)) {
    document.querySelector(".counter-inputs-container").innerHTML += `
      <div class="numeric-input">
        <label for="${label}">${label}</label>
        <box class="buttons-container" id="${label}">
          <button type="text" class="op-button" onclick="changeValue(this, 'down')">-</button>
          <input type="text" class="input-number" oninput="numericInputOnChange(this)" value="${labels[label]}"/>
          <button class="op-button" onclick="changeValue(this, 'up')">+</button>
        </box>
      </div>
      `
    // document.getElementById()
  }
}






// src/components/renderCounterInputs.js
// import { changeValue, numericInputOnChange } from '../tools/numberFunctions.js';

// export default function renderCounterInputs() {
//   const labels = {
//     "Ocupação total": 50,
//     "Previsão reservas": 0,
//     "Check-in": 0,
//     "Renovação": 0
//   };

//   const container = document.createElement("div");
//   container.classList.add("counter-inputs-container", "container-input");

//   for (const label of Object.keys(labels)) {
//     const wrapper = document.createElement("div");
//     wrapper.classList.add("numeric-input");

//     wrapper.innerHTML = `
//       <label for="${label}">${label}</label>
//       <div class="buttons-container" id="${label}">
//         <button type="button" class="op-button" data-direction="down">-</button>
//         <input type="text" class="input-number" value="${labels[label]}"/>
//         <button type="button" class="op-button" data-direction="up">+</button>
//       </div>
//     `;

//     // Adiciona os event listeners depois que o HTML foi inserido
//     const buttons = wrapper.querySelectorAll(".op-button");
//     buttons.forEach(button => {
//       button.addEventListener("click", () => {
//         changeValue(button, button.dataset.direction);
//       });
//     });

//     const input = wrapper.querySelector(".input-number");
//     input.addEventListener("input", () => {
//       numericInputOnChange(input);
//     });

//     container.appendChild(wrapper);
//   }

//   document.querySelector(".root").appendChild(container);
// }
