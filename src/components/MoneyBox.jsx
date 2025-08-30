import { useEffect } from "react";
import { AiOutlineCalculator } from "react-icons/ai";

import { convertToMoneyFormat, filterNumbers } from "../tools/numberTools.js";

export default function MoneyBox({ formData, setFormData, setCalculatorSettings }) {

  const { money } = formData;
  const keys = Object.keys(money)

  const handleValue = (e, key) => {
    const copy = { ...formData };
    copy.money[key] = convertToMoneyFormat(e.target.value)
    setFormData({ ...copy })
  }

  const handleCalculator = (key) => {
    setCalculatorSettings({ visibility: true, key: key })
  }

  useEffect(() => {
    const inflow = filterNumbers(money?.Caixa)/100;
    const outflow = filterNumbers(money?.Retiradas)/100;  
    const total = convertToMoneyFormat(inflow - outflow);

    if (total !== money["Caixa enviado"]) {
      const copy = { ...formData };
      copy.money["Caixa enviado"] = total;
      setFormData(copy)
    }
  }, [formData])


  return (
    <div className="box-inputs-container">
      {keys.map((key) => (
        <div className="container-input financy-input-container" id={key} key={key}>
          <label htmlFor={key}>
            {key}
            {key !== "Caixa enviado" &&
              <button className="open-calculator-button" onClick={()=>handleCalculator(key)} >
                <AiOutlineCalculator size={20}/>
              </button>
            }
          </label>
          <input
            id={key}
            className="input-box"
            value={money[key]}
            onChange={key !== "Caixa enviado" ? (e) => handleValue(e, key) : undefined}
          />
        </div>
      ))}
    </div>
  )
}