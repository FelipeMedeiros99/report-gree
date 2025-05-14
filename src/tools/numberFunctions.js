export function changeValue(element, operation) {
  const input = element.parentNode.querySelector("input");

  let inputValue = Number(input.value) || 0;

  if (operation === "up") {
    inputValue++
  } else if (operation === "down") {
    if (inputValue > 0) {
      inputValue--
    }
  }
  input.value = String(inputValue);
}


export function filterNumbers(string) {
  string = String(string)
  return string.replace(/\D/g, "")
}


export function numericInputOnChange(component) {
  let arrayValues = filterNumbers(component.value);
  component.value = arrayValues;
}


export function convertToFloat(stringReceived) {

  return filterNumbers(stringReceived) / 100
}


export function convertToMnoneyFormat(component) {
  let value = filterNumbers(component.value);
  value = (Number(value / 100)).toFixed(2)

  component.value = "R$ " + String(value).replace(".", ",")

  calculateTotalValue()
}