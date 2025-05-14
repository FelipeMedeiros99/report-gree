

function recepcionistInput() {
  const recepcionistList = getRecepcionistsNames()

  document.querySelector(".root").innerHTML += `
    <div class="recepcionist-container container-input">
      <label for="recepcionist-name">Recepcionista</label>
      <div class="container-input-with-button">
        <input type="text" id="recepcionist-name" list="recepcionists"/>
          <img src="assets/image.png" class="clearButton" onclick="clearRecepcionistName()"/>

      </div>
      <datalist id="recepcionists">
        ${recepcionistList.map((recep)=>(`<option>${recep}</option>`))}
      </datalist>
    </div>
    `;
}


function calendar(){
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth()+1).padStart(2, "0");
  const year = String(date.getFullYear());

  document.querySelector(".root").innerHTML += `
    <div class="container-input">
      <label>Data</label>
      <input type="date" value="${year}-${month}-${day}"/>
    </div>
  `
}


function counterInputs() {
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

function moneyBox() {

  const labels = ["Caixa", "Retiradas", "Caixa enviado"]
  document.querySelector(".root").innerHTML += `<div class="box-inputs-container"></div>`

  for (const label of labels) {
    if(label !== "Caixa enviado"){
      document.querySelector(".box-inputs-container").innerHTML += `
      <div class="container-input financy-input-container">
        <label for="${label}">${label}</label>
        <input type="text" id=${label} class="input-box" oninput="numericFloatInputOnChange(this)" value="R$ 0,00"/>
      </div>
      `
    }else{
      document.querySelector(".root").innerHTML += `
        <div class="container-input financy-input-container">
        <label for="${label.replace(" ", "_")}">${label}</label>
        <input type="text" id=${label.replace(" ", "_")}  class="input-box" oninput="numericFloatInputOnChange(this)" value="R$ 0,00"/>
      </div>`
    }
  }
}


function obsInput() {
  const labels = ["Devendo", "Observações"]
  for (const label of labels) {
    document.querySelector(".root").innerHTML += `
    <div class="container-input">
      <label for="obs-box">${label}</label>
      <textarea type="text" class="obs-box"></textarea>
    </div>
  `
  }
}

function copyButton() {
  document.querySelector(".root").innerHTML += `<button onclick="copyInformations()" class="copy-button">Copiar</button>`
}

function line(){
  document.querySelector(".root").innerHTML += `<hr/>`
}



function main() {
  recepcionistInput();
  calendar();
  line();
  counterInputs();
  line()
  moneyBox();
  line()
  obsInput();
  copyButton();
}

main();