// import { addAtRoot } from "../tools/domFunctions";
// import { getRecepcionistsNames, saveNewRecepcionist } from "../tools/storageFunctions";
// import { convertTextToItalic, formatDate } from "../tools/stringFormat";

// let toggleButtonTextEvent;

// function updateNames() {
//   const recepcionistList = getRecepcionistsNames()
//   const selectedRecepcionist = document.querySelector("#recepcionist-name").value;
//   const recepcionistExists = recepcionistList.indexOf(selectedRecepcionist) > -1
//   if (!recepcionistExists) {
//     saveNewRecepcionist(selectedRecepcionist)
//   }
// }

// function toggleButtonLegend(){
//   const button = document.querySelector(".copy-button");
//   clearTimeout(toggleButtonTextEvent);
  
//   button.innerText = "Copiado ✅";
  
//   toggleButtonTextEvent = setTimeout(()=>{
//       button.innerText = "Copiar"
//   }, 3000)
// }

// function generateReport(listOfDatas) {
//   const report = `
// 📋 *Relatório de Plantão - ${formatDate(listOfDatas[1])}*
// 👤 *Recepcionista:* ${listOfDatas[0]}
// \`\`\`_____________________________\`\`\`
// 🏨 *Operacional*  
// • Ocupação total: .............. *${String(listOfDatas[2]).padStart(2, "0")}*
// • Previsão de reservas: .... *${String(listOfDatas[3]).padStart(2, "0")}*
// • Check-ins: ....................... *${String(listOfDatas[4]).padStart(2, "0")}*
// • Renovações: ................... *${String(listOfDatas[5]).padStart(2, "0")}*
// \`\`\`_____________________________\`\`\`
// 💰 *Financeiro*  
// • Caixa: ................... *${listOfDatas[6]}*  
// • Retiradas: ............ *${listOfDatas[7]}*  
// • Caixa enviado: .... *${listOfDatas[8]}*
// \`\`\`_____________________________\`\`\`
// 📝 *Informações*
// • Devendo: 
// ${listOfDatas[9].split("\n").map((text)=>convertTextToItalic(text)).join("")}
// • Observações:  
// ${listOfDatas[10].split("\n").map((text)=>convertTextToItalic(text)).join("")}  
// `
//   navigator.clipboard.writeText(report)
// }

// function copyInformations() {
//   const valuesReceived = []
//   const inputs = document.querySelectorAll("input")
//   const textareas = document.querySelectorAll("textarea")

//   for (let input of inputs) {
//     valuesReceived.push(input.value);
//   }
//   for (let text of textareas) {
//     valuesReceived.push(text.value);
//   }

//   generateReport(valuesReceived)
// }

// export default function renderCopyButton() {
//   const button = document.createElement("button");
//   button.className = "copy-button";
//   button.textContent = "Copiar";

//   addAtRoot(button);

//   button.addEventListener("click", updateNames);
//   button.addEventListener('click', toggleButtonLegend);
//   button.addEventListener('click', copyInformations);

// }
