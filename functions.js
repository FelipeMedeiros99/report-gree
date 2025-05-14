function alterValue(element, operation) {
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


function filterNumbers(string) {
  string = String(string)
  return string.replace(/\D/g, "")
}


function numericInputOnChange(component) {
  let arrayValues = filterNumbers(component.value);
  component.value = arrayValues;
}


function convertToFloat(stringReceived) {

  return filterNumbers(stringReceived) / 100
}

function valueSend() {
  const valueReceived = convertToFloat(document.querySelector("#Caixa").value);
  const valueRemoved = convertToFloat(document.querySelector("#Retiradas").value)
  const total = valueReceived - valueRemoved

  document.querySelector("#Caixa_enviado").value = "R$ " + String(total.toFixed(2)).replace(".", ",");
}


function numericFloatInputOnChange(component) {
  let value = filterNumbers(component.value);
  value = (Number(value / 100)).toFixed(2)

  component.value = "R$ " + String(value).replace(".", ",")

  valueSend()
}


function saveNewRecepcionist(name) {
  const names = getRecepcionistsNames();
  names.push(name)
  localStorage.setItem("reportSystem", JSON.stringify(names))
}


function getRecepcionistsNames() {
  let recepcionistList = localStorage.getItem("reportSystem");
  if (!recepcionistList) {
    localStorage.setItem("reportSystem", "[]");
    recepcionistList = "[]";
  }
  recepcionistList = JSON.parse(recepcionistList);
  return recepcionistList.sort();
}


function updateNames() {
  const recepcionistList = getRecepcionistsNames()
  const selectedRecepcionist = document.querySelector("#recepcionist-name").value;
  const recepcionistExists = recepcionistList.indexOf(selectedRecepcionist) > -1
  if (!recepcionistExists) {
    saveNewRecepcionist(selectedRecepcionist)
  }
}

function textProcessor(text){
  return text.length>0?`_${text}_\n` :`\n`
}

function generateReport(listOfDatas) {
  const report = `
📋 *Relatório de Plantão - ${formatDate(listOfDatas[1])}*
👤 *Recepcionista:* ${listOfDatas[0]}
\`\`\`_____________________________\`\`\`
🏨 *Operacional*  
• Ocupação total: .............. *${String(listOfDatas[2]).padStart(2, "0")}*
• Previsão de reservas: .... *${String(listOfDatas[3]).padStart(2, "0")}*
• Check-ins: ....................... *${String(listOfDatas[4]).padStart(2, "0")}*
• Renovações: ................... *${String(listOfDatas[5]).padStart(2, "0")}*
\`\`\`_____________________________\`\`\`
💰 *Financeiro*  
• Caixa: ................... *${listOfDatas[6]}*  
• Retiradas: ............ *${listOfDatas[7]}*  
• Caixa enviado: .... *${listOfDatas[8]}*
\`\`\`_____________________________\`\`\`
📝 *Informações*
• Devendo: 
${listOfDatas[9].split("\n").map((text)=>textProcessor(text)).join("")}
• Observações:  
${listOfDatas[10].split("\n").map((text)=>textProcessor(text)).join("")}  
`

  navigator.clipboard.writeText(report)
}

function copyInformations() {
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


function clearRecepcionistName() {
  document.querySelector("#recepcionist-name").value = ""
}


function dateFormat(numbers) {
  numbers = numbers.slice(0, 8)
  if (numbers.length > 5) {
    return numbers.slice(0, 2) + "/" + numbers.slice(2, 4) + "/" + numbers.slice(4)
  }
  return numbers

}

function formatDate(defaultData) {
  const splitedData = defaultData.split("-")
  return `${splitedData[2]}/${splitedData[1]}/${splitedData[0]}`
}