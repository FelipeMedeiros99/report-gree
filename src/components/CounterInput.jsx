export default function CounterInput({ formData, setFormData }) {

  const { counterInputs } = formData;
  const inputkeys = Object.keys(counterInputs);

  const changeInputValue = (key, value) => {
    const newValue = Number(counterInputs[key]) + value;
    const copyFormData = { ...formData }
    copyFormData.counterInputs[key] = newValue > 0 ? newValue : 0
    setFormData({ ...copyFormData })
  }

  const changeValue = (e, key) => {
    const value = e.target.value.replace(/\D/g, "");
    const copyFormData = { ...formData };
    copyFormData.counterInputs[key] = value;
    setFormData({ ...copyFormData });
  }

  return (
    <div className="counter-inputs-container container-input">

      {inputkeys.map((inputKey) => (
        <div key={inputKey} className="numeric-input">
          <label htmlFor={inputKey}>{inputKey}</label>
          <div className="buttons-container" id={inputKey}>
            <button type="button" className="op-button down" onClick={() => changeInputValue(inputKey, -1)}>-</button>
            <input type="text" className="input-number" value={counterInputs[inputKey]} onChange={(e) => changeValue(e, inputKey)} />
            <button type="button" className="op-button up" onClick={() => changeInputValue(inputKey, 1)}>+</button>
          </div>
        </div>
      ))}
      
    </div>
  )
}