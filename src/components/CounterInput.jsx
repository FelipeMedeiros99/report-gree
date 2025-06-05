export default function CounterInput({ formData, setFormData }) {

  const changeInputValue = (key, value) => {
    const newValue = Number(formData.counterInputs[key]) + value;
    const copyFormData = {...formData}
    copyFormData.counterInputs[key] = newValue>0 ? newValue : 0
    setFormData({...copyFormData})
  }
  
  const changeValue = (e, key)=>{
    const value = e.target.value.replace(/\D/g, "");
    const copyFormData = {...formData};
    copyFormData.counterInputs[key] = value;
    setFormData({...copyFormData});
  }

  return (
    <div className="counter-inputs-container container-input">

      {Object.keys(formData?.counterInputs || []).map((inputLabel) => (
        <div key={inputLabel} className="numeric-input">
          <label htmlFor={inputLabel}>{inputLabel}</label>
          <div className="buttons-container" id={inputLabel}>
            <button type="button" className="op-button down" onClick={()=>changeInputValue(inputLabel, -1)}>-</button>
            <input type="text" className="input-number" value={formData?.counterInputs[inputLabel]} onChange={(e)=>changeValue(e, inputLabel)}/>
            <button type="button" className="op-button up" onClick={()=>changeInputValue(inputLabel, 1)}>+</button>
          </div>
        </div>
      ))}
    </div>
  )
}