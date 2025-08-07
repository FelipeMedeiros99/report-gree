import React, { useEffect, useState } from "react";

import RecepcionistForm from "./RecepcionistForm";
import Calendar from "./Calendar";
import CounterInput from "./CounterInput";
import MoneyBox from "./MoneyBox";
import Observations from "./Observations";
import Calculator from "./Calculator";

import getDateToday from "../tools/getDateToday";
import { convertTextToItalic, formatDate } from "../tools/stringFormat";
import { getLocalStorageData, getRecepcionistsNames, saveNewRecepcionist } from "../tools/storageFunctions";

function App() {
  const [buttonText, setButtonText] = useState("Copiar");
  const [calculatorSettings, setCalculatorSettings] = useState({ visibility: false, key: "" });
  const [formData, setFormData] = useState(() => {
    let data = localStorage.getItem("reportSystem");
    const defaultData = {
      recepcionistsNames: [], formData: {
        recepcionist: "",
        date: getDateToday(),
        counterInputs: { "Ocupação total": 50, "Previsão reservas": 0, "Check-in": 0, "Renovação": 0 },
        money: { Caixa: "R$ 0,00", Retiradas: "R$ 0,00", "Caixa enviado": "R$ 0,00" },
        debtors: "",
        observations: ""
      }
    }
    if (!data) {
      localStorage.setItem("reportSystem", JSON.stringify(defaultData))
      data = defaultData;
    } else if (!JSON.parse(data).recepcionistsNames || !JSON.parse(data).formData) {
      localStorage.setItem("reportSystem", JSON.stringify(defaultData))
      data = defaultData;
    } else {
      data = JSON.parse(data)
    }
    return (data.formData)
  });

  const saveRecepcionistAtLocalStorage = () => {
    const recepcionistList = getLocalStorageData().recepcionistsNames;
    const selectedRecepcionist = formData?.recepcionist;
    const recepcionistExists = recepcionistList.indexOf(selectedRecepcionist) > -1
    if (!recepcionistExists) {
      saveNewRecepcionist(selectedRecepcionist)
    }
  }

  const clearForms = () => {
    setFormData({
      recepcionist: "",
      date: getDateToday(),
      counterInputs: { "Ocupação total": 50, "Previsão reservas": 0, "Check-in": 0, "Renovação": 0 },
      money: { Caixa: "R$ 0,00", Retiradas: "R$ 0,00", "Caixa enviado": "R$ 0,00" },
      debtors: "",
      observations: ""
    })
  }

  const generateReportText = () => {
    setButtonText("Copiar")
    const report = `
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
    navigator.clipboard.writeText(report);

    setButtonText("Copiado ✅")
    setTimeout(() => setButtonText("Copiar"), 3000)
    saveRecepcionistAtLocalStorage()
  }

  useEffect(() => {
    const recepcionistsNames = getLocalStorageData().recepcionistsNames;
    localStorage.setItem("reportSystem", JSON.stringify({ recepcionistsNames, formData }))
  }, [formData])

  return (
    <React.Fragment>
      <RecepcionistForm formData={formData} setFormData={setFormData} />
      <Calendar formData={formData} setFormData={setFormData} /><hr />
      <CounterInput formData={formData} setFormData={setFormData} /><hr />
      <MoneyBox formData={formData} setFormData={setFormData} setCalculatorSettings={setCalculatorSettings} /><hr />
      <Observations formData={formData} setFormData={setFormData} />
      <div className="btn-container">
        <button onClick={generateReportText} className="btn copy">{buttonText}</button>
        <button onClick={clearForms} className="btn clear">Limpar</button>
      </div>

      {calculatorSettings.visibility &&
        <Calculator formData={formData} setFormData={setFormData} calculatorSettings={calculatorSettings} setCalculatorSettings={setCalculatorSettings} />
      }

    </React.Fragment>
  );
}

export default App;
