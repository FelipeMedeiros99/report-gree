import React from "react"

export default function Observations({ formData, setFormData }) {
  const observationsConfig = [
    {
      label: "Devendo",
      key: "debtors"
    },
    {
      label: "Observações",
      key: "observations"
    }
  ]

  return (
    <div className="container-input">
      {observationsConfig.map((config) => (
        <React.Fragment key={config.key}>
          <label htmlFor={config.key}>{config.label}</label>
          <textarea 
            id={config.key} 
            className="obs-box" 
            value={formData[config.key]}
            onChange={(e)=>{
              const copy = {...formData};
              copy[config.key] = e.target.value;
              setFormData({...copy})
            }}
          />
        </React.Fragment>
      ))}
    </div>
  )
}