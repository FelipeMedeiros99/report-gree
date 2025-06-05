export function filterNumbers(string) {
  string = String(string)
  return string.replace(/\D/g, "")
}

export function convertToFloat(stringReceived) {
  return filterNumbers(stringReceived) / 100
}
