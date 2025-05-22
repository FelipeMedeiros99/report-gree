export function convertTextToItalic(text){
  return text.length>0?`_${text.trim()}_\n` :`\n`
}

export function dateFormat(numbers) {
  numbers = numbers.slice(0, 8)
  if (numbers.length > 5) {
    return numbers.slice(0, 2) + "/" + numbers.slice(2, 4) + "/" + numbers.slice(4)
  }
  return numbers
}

export function formatDate(defaultData) {
  const splitedData = defaultData.split("-")
  return `${splitedData[2]}/${splitedData[1]}/${splitedData[0]}`
}