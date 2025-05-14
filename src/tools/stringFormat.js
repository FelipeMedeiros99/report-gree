export function convertTextToItalic(text){
  return text.length>0?`_${text}_\n` :`\n`
}


export function generateReport(listOfDatas) {
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
${listOfDatas[9].split("\n").map((text)=>convertTextToItalic(text)).join("")}
• Observações:  
${listOfDatas[10].split("\n").map((text)=>convertTextToItalic(text)).join("")}  
`
  navigator.clipboard.writeText(report)
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