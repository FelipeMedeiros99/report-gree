import { getRecepcionistsNames } from "../tools/storageFunctions";

export default function RecepcionistForm({formData, setFormData}) {
  const recepcionistList = getRecepcionistsNames();

  return (
    <div className="recepcionist-container container-input">
      <label htmlFor="recepcionist-name">Recepcionista</label>
      <div className="container-input-with-button">
        <input 
          value={formData?.recepcionist} 
          type="text" id="recepcionist-name" 
          list="recepcionists"
          onChange={(e)=>{setFormData({...formData, recepcionist: e.target.value})}}
        />
        <img src="assets/image.png" className="clearButton" onClick={()=>setFormData({...formData, recepcionist: ""})}/>
      </div>

      <datalist id="recepcionists">
        {recepcionistList.map((recep) => (<option>{recep}</option>))}
      </datalist>
    </div>
  )
}