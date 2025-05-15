import { filterNumbers } from "./numberFunctions.js"

export function setOnlyNumbersOnInput(input) {
  let arrayValues = filterNumbers(input.value);
  input.value = arrayValues;
}

export function clearRecepcionistName(component) {
  component.querySelector('input').value = ""
}

export function addAtRoot(element){
  document.querySelector(".root").appendChild(element)
}
