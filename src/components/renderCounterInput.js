import { addAtRoot, setOnlyNumbersOnInput } from "../tools/domFunctions.js";

function generateComponent(){
  const inputsLabels = {
    "Ocupação total": 50,
    "Previsão reservas": 0,
    "Check-in": 0,
    "Renovação": 0
  }

  
  const container = document.createElement("div");

  container.className = "counter-inputs-container container-input";
  
  
  for (const inputLabel of Object.keys(inputsLabels)) {
    const subContainer = document.createElement("div");
    subContainer.className = "numeric-input";

    subContainer.innerHTML = `
    <label for="${inputLabel}">${inputLabel}</label>
    <div class="buttons-container" id="${inputLabel}">
      <button type="button" class="op-button down">-</button>
      <input type="text" class="input-number" value="${inputsLabels[inputLabel]}"/>
      <button type="button" class="op-button up">+</button>
    </div>
    `
    
    container.appendChild(subContainer)
    
  }

  addAtRoot(container)
}

export function changeInputValue(component, operation) {

  const input = component.querySelector("input");

  let inputValue = Number(input.value) || 0;

  input.value = 
  operation === "up" 
    ?inputValue+1
    :inputValue > 0 
      ?inputValue-1
      :inputValue
  ;
}

function addEventAtComponents(){
  const inputContainers = document.querySelectorAll(".numeric-input");
  
  
  for(let inputContainer of inputContainers){

    const buttonDown = inputContainer.querySelector(".down")
    buttonDown.addEventListener("click", ()=>changeInputValue(inputContainer, "down"))

    const input = inputContainer.querySelector(".input-number")
    input.addEventListener("input", (e)=>setOnlyNumbersOnInput(e.currentTarget))
  
    const buttonUp = inputContainer.querySelector(".up")
    buttonUp.addEventListener("click", ()=>changeInputValue(inputContainer, "up"))
    
  }
}

export default function renderCounterInputs() {
  generateComponent()
  addEventAtComponents()
}