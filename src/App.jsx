import React, { useEffect, useState } from "react";

import RecepcionistForm from "./components/RecepcionistForm";
import Calendar from "./components/Calendar";
import CounterInput from "./components/CounterInput";
import MoneyBox from "./components/MoneyBox";
import Observations from "./components/Observations";
import Calculator from "./components/Calculator";
import Buttons from "./components/Buttons";

import { getLocalStorageData } from "./tools/localStorageTools.js";

function App() {
  const [calculatorSettings, setCalculatorSettings] = useState({ visibility: false, key: "" });
  const [formData, setFormData] = useState(getLocalStorageData().formData)

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
      <Buttons formData={formData} setFormData={setFormData}/>

      {calculatorSettings.visibility &&
        <Calculator formData={formData} setFormData={setFormData} calculatorSettings={calculatorSettings} setCalculatorSettings={setCalculatorSettings} />
      }

    </React.Fragment>
  );
}

export default App;
