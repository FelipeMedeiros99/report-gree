import { useState } from "react";
import RecepcionistForm from "./RecepcionistForm";
import Calendar from "./Calendar";

function App() {
  const [formData, setFormData] = useState({});

  return (
    <div className="main">
      <RecepcionistForm formData={formData} setFormData={setFormData}/>
      <Calendar formData={formData} setFormData={setFormData}/>
    </div>
  );
}

export default App;
