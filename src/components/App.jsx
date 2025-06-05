import { useEffect, useState } from "react";

import RecepcionistForm from "./RecepcionistForm";
import Calendar from "./Calendar";
import CounterInput from "./CounterInput";
import MoneyBox from "./MoneyBox";
import Observations from "./Observations";

import getDateToday from "../tools/getDateToday";

function App() {
  const [formData, setFormData] = useState({
    recepcionist: "",
    date: getDateToday(),
    counterInputs: {"Ocupação total": 50, "Previsão reservas": 0, "Check-in": 0, "Renovação": 0},
    money: { Caixa: "R$ 0,00", Retiradas: "R$ 0,00", "Caixa enviado": "R$ 0,00" },
    debtors: "",
    observations: ""
  });

  console.log(formData)
  return (
    <div className="main">
      <RecepcionistForm formData={formData} setFormData={setFormData} />
      <Calendar formData={formData} setFormData={setFormData} />
      <hr />
      <CounterInput formData={formData} setFormData={setFormData} />
      <hr />
      <MoneyBox formData={formData} setFormData={setFormData} />
      <hr />
      <Observations formData={formData} setFormData={setFormData} />


    </div>
  );
}

export default App;
