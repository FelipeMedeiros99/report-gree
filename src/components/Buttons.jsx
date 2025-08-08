import { useState } from "react";

import { saveNewRecepcionist } from "../tools/localStorageTools.js";
import { modelReport } from "../tools/stringTools.js";
import { getDateToday } from "../tools/dateTools.js";

export default function Buttons({ formData, setFormData }) {
  const [buttonText, setButtonText] = useState("Copiar");

  const generateReportText = () => {
    const report = modelReport(formData);
    navigator.clipboard.writeText(report);
  }

  const toggleButtonText = () => {
    setButtonText("Copiar")
    setButtonText("Copiado ✅")
    setTimeout(() => setButtonText("Copiar"), 3000)
  }

  const copyButtonActions = () => {
    generateReportText();
    toggleButtonText();
    saveNewRecepcionist(formData?.recepcionist);
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


  return (
    <div className="btn-container">
      <button onClick={copyButtonActions} className="btn copy" >{buttonText}</button>
      <button onClick={clearForms} className="btn clear">Limpar</button>
    </div>
  )
}