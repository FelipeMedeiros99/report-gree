export default function counterInputs() {
  const labels = {"Ocupação total": 50, "Previsão reservas": 0, "Check-in": 0, "Renovação": 0}
  document.querySelector(".root").innerHTML += `<div class="counter-inputs-container container-input"></div>`

  for (const label of Object.keys(labels)) {
    document.querySelector(".counter-inputs-container").innerHTML += `
      <div class="numeric-input">
        <label for="${label}">${label}</label>
        <box class="buttons-container" id="${label}">
          <button type="text" class="op-button" onclick="alterValue(this, 'down')">-</button>
          <input type="text" class="input-number" oninput="numericInputOnChange(this)" value="${labels[label]}"/>
          <button class="op-button" onclick="alterValue(this, 'up')">+</button>
        </box>
      </div>
      `
  }
}