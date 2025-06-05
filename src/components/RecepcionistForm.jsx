import { useState } from "react";
import { getRecepcionistsNames } from "../tools/storageFunctions";

export default function RecepcionistForm({formData, setFormData}) {
  const recepcionistList = getRecepcionistsNames();

  return (
    <div className="recepcionist-container container-input">
      <label for="recepcionist-name">Recepcionista</label>
      <div class="container-input-with-button">
        <input 
          value={formData?.recepcionist || ""} 
          type="text" id="recepcionist-name" 
          list="recepcionists"
          onChange={(e)=>{setFormData({...formData, recepcionist: e.target.value})}}
        />
        <img src="assets/image.png" class="clearButton" onClick={()=>setFormData({...formData, recepcionist: ""})}/>
      </div>

      <datalist id="recepcionists">
        {recepcionistList.map((recep) => (<option>${recep}</option>))}
      </datalist>
    </div>
  )
}