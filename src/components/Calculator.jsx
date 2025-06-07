import { useEffect, useRef, useState } from "react";
import { evaluate } from "mathjs";

export default function Calculator({ formData, setFormData, calculatorSettings, setCalculatorSettings }) {
  const operators = [["1", "2", "3", "+"], ["4", "5", "6", "-"], ["7", "8", "9", "*"], ["/", "0", ".", "="]];
  const [calculatorValue, setCalculatorValue] = useState(evaluate(formData.money[calculatorSettings.key].replace(",", ".").replace("R$", "").trim()))
  const container = useRef(null)

  const calculate = () => {
    const copy = {...formData};
    setCalculatorValue(lastValue => {
      let result;
      try{
        result = String(evaluate(lastValue));
      }catch(e){
        result = lastValue
      }finally{
        const formatedValue = Number(result).toFixed(2)
        if(!isNaN(formatedValue) && formatedValue !== "Infinity"){
          copy.money[calculatorSettings.key] = "R$ " + String(Number(result).toFixed(2)).replace(".", ",");
          setFormData({...copy})
          return result;
        }else{
          alert("Erro no calculo, verifique!")
        }
      }
    })
  }

  useEffect(()=>{
    const keyDown = (e) =>{
      const value = e.key

      if(/\d/.test(value) || ["+", "-", "/", "*", "."].indexOf(value) !== -1){
        setCalculatorValue(lastValue => lastValue + value)
      }else if(value === "Backspace"){
        setCalculatorValue(lastValue=> lastValue.slice(0, lastValue.length -1))
      }else if(value === "Escape"){
        setCalculatorSettings({...calculatorSettings, visibility: false})
      }else if(value === "Enter"){
        calculate()
      }else if(value === "Delete"){
        setCalculatorValue("")
      }
    }
    document.addEventListener('keydown', keyDown)

    return () => {
      document.removeEventListener("keydown", keyDown)
    }
  }, []);

  useEffect(()=>{
    const handleClick = (e)=>{
      if(!container.current.contains(e.target)){
        setCalculatorSettings(lastValue=>({...lastValue, visibility: false}))
      }
    }
    document.addEventListener("mousedown", handleClick)

    return ()=>{
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  const handleValue = (value)=>{
    if(value !== "="){
      setCalculatorValue(lastValue => lastValue + value)
    }else{
      calculate()
    }
  }

  return (
    <div className={`super-container-calculator`}>
      <div className="container-calculator" ref={container}>
        <button className="button-close-calculator" onClick={()=>{setCalculatorSettings({visibility: false, key: ""})}}>X</button>
        <div className="container-display">
          <input className="display-input" type="button" value={calculatorValue}/>
          <input type="button" className="clear-input" value="C" onClick={()=>setCalculatorValue("")}/>
          {operators.map((row, index) => (
            <div key={index}>
              {row.map((simbol) => (
                <input key={simbol} type="button" className="input-button" value={simbol} onClick={()=>handleValue(simbol)}/>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}