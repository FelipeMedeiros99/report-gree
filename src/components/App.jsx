import { useState } from "react";

import RecepcionistForm from "./RecepcionistForm";
import Calendar from "./Calendar";
import CounterInput from "./CounterInput";

function App() {
  const [formData, setFormData] = useState({});

  console.log(formData)
  return (
    <div className="main">
      <RecepcionistForm formData={formData} setFormData={setFormData}/>
      <Calendar formData={formData} setFormData={setFormData}/>
      <hr />
      <CounterInput formData={formData} setFormData={setFormData}/>
    </div>
  );
}

export default App;
