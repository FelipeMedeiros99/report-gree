export function filterNumbers(string) {
  string = String(string)
  return string.replace(/\D/g, "")
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