import { addAtRoot } from "../tools/domFunctions";
import { convertToFloat, filterNumbers } from "../tools/numberFunctions";

function createElement(){
  const labels = ["Caixa", "Retiradas", "Caixa enviado"]
  let total;

  const container = document.createElement("div");
  container.className = "box-inputs-container";
  
  for (const label of labels) {
    if(label !== "Caixa enviado"){
      container.innerHTML += `
        <div class="container-input financy-input-container">
          <label for="${label}">${label}</label>
          <input type="text" id=${label} class="input-box" value="R$ 0,00"/>
        </div>
      `
    }else{
      total = document.createElement("div");
      total.className = "container-input financy-input-container"
      const formatedLabel = label.replace(" ", "_");
      total.innerHTML = `
        <label for="${formatedLabel}">${label}</label>
        <input type="text" id=${formatedLabel}  class="input-box" value="R$ 0,00"/>
      `
    }
    
  }
  addAtRoot(container)
  addAtRoot(total)
}

function calculateTotalValue() {
  const valueReceived = convertToFloat(document.querySelector("#Caixa").value);
  const valueRemoved = convertToFloat(document.querySelector("#Retiradas").value)
  const total = valueReceived - valueRemoved
  document.querySelector("#Caixa_enviado").value = "R$ " + String(total.toFixed(2)).replace(".", ",");
}

function convertToMnoneyFormat(input) {
  let value = filterNumbers(input.value);
  value = (Number(value / 100)).toFixed(2)
  input.value = "R$ " + String(value).replace(".", ",")
  calculateTotalValue()
}

function addEventListenerAtComponents(){
  const inputs = document.querySelectorAll(".financy-input-container .input-box");
  for(let input of inputs){
    input.addEventListener("input", ()=>convertToMnoneyFormat(input));
  }
}

export default function renderMoneyBox() {
  createElement();
  addEventListenerAtComponents();
}