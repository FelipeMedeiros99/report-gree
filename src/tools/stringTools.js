export function convertTextToItalic(text) {
  return text.length > 0 ? `_${text.trim()}_\n` : `\n`
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

export function modelReport(formData) {
  return `
      📋 *Relatório de Plantão - ${formatDate(formData.date)}*
      👤 *Recepcionista:* ${formData.recepcionist}
      \`\`\`_____________________________\`\`\`
      🏨 *Operacional*  
      • Ocupação total: .............. *${String(formData.counterInputs["Ocupação total"]).padStart(2, "0")}*
      • Previsão de reservas: .... *${String(formData.counterInputs["Previsão reservas"]).padStart(2, "0")}*
      • Check-ins: ....................... *${String(formData.counterInputs["Check-in"]).padStart(2, "0")}*
      • Renovações: ................... *${String(formData.counterInputs["Renovação"]).padStart(2, "0")}*
      \`\`\`_____________________________\`\`\`
      💰 *Financeiro*  
      • Caixa: ................... *${formData.money["Caixa"]}*  
      • Retiradas: ............ *${formData.money["Retiradas"]}*  
      • Caixa enviado: .... *${formData.money["Caixa enviado"]}*
      \`\`\`_____________________________\`\`\`
      📝 *Informações*
      • Devendo: 
      ${formData.debtors.split("\n").map((text) => convertTextToItalic(text)).join("")}
      • Observações:  
      ${formData.observations.split("\n").map((text) => convertTextToItalic(text)).join("")}  
      `.trim().split("\n").map(line => line.trim()).join("\n");
}