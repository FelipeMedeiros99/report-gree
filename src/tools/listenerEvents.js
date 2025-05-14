
export function calculateTotalValue() {
  const valueReceived = convertToFloat(document.querySelector("#Caixa").value);
  const valueRemoved = convertToFloat(document.querySelector("#Retiradas").value)
  const total = valueReceived - valueRemoved

  document.querySelector("#Caixa_enviado").value = "R$ " + String(total.toFixed(2)).replace(".", ",");
}

export function updateNames() {
  const recepcionistList = getRecepcionistsNames()
  const selectedRecepcionist = document.querySelector("#recepcionist-name").value;
  const recepcionistExists = recepcionistList.indexOf(selectedRecepcionist) > -1
  if (!recepcionistExists) {
    saveNewRecepcionist(selectedRecepcionist)
  }
}

export function copyInformations() {
  updateNames()
  const valuesReceived = []
  const inputs = document.querySelectorAll("input")
  const textareas = document.querySelectorAll("textarea")

  for (let input of inputs) {
    valuesReceived.push(input.value);
  }
  for (let text of textareas) {
    valuesReceived.push(text.value);
  }

  document.querySelector(".copy-button").innerText = "Copiado ✅"
  setTimeout(()=>{
      document.querySelector(".copy-button").innerText = "Copiar"
  }, 3000)

  generateReport(valuesReceived)

}

export function clearRecepcionistName() {
  document.querySelector("#recepcionist-name").value = ""
}
