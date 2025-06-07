import { useEffect } from "react";

export default function MoneyBox({ formData, setFormData, setCalculatorSettings }) {

  const filterNumbers = (value) => {
    return Number(String(value).replace(/\D/g, ""))
  }

  const convertToMoneyFormat = (value) => {
    value = filterNumbers(value)
    return `R$ ${Number(value / 100).toFixed(2)}`.replace(".", ",")
  }


  const handleValue = (e, key) => {
    const copyFormData = { ...formData };
    copyFormData.money[key] = convertToMoneyFormat(e.target.value)
    setFormData({ ...copyFormData })
  }

  useEffect(() => {
    const inflow = filterNumbers(formData?.money?.Caixa);
    const outflow = filterNumbers(formData?.money?.Retiradas);
    const total = "R$ " + String(((inflow - outflow) / 100).toFixed(2)).replace(".", ",");
    if (total !== formData?.money?.["Caixa enviado"]) {
      const copy = { ...formData };
      copy.money["Caixa enviado"] = total;
      setFormData({ ...copy })
    }
  }, [formData])


  return (
    <div className="box-inputs-container">
      {Object.keys(formData?.money || []).map((key) => (
        <div className="container-input financy-input-container" id={key} key={key}>
          <label htmlFor={key}>
            {key}
            {key !== "Caixa enviado" &&
              <button className="open-calculator-button" onClick={() => {
                setCalculatorSettings({ visibility: true, key: key })
              }} >
                <span className="material-symbols-outlined">
                  calculate
                </span>
              </button>
            }
          </label>
          <input
            type="text"
            id={key}
            className="input-box"
            value={formData?.money[key]}
            onChange={key !== "Caixa enviado" ? (e) => handleValue(e, key) : undefined}
          />
        </div>
      ))}
    </div>
  )
}