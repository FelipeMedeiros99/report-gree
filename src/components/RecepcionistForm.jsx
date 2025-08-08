import { getLocalStorageData } from "../tools/localStorageTools.js";

export default function RecepcionistForm({ formData, setFormData }) {
  const { recepcionistsNames } = getLocalStorageData();
  const { recepcionist } = formData;

  const clearRecepcionistName = () => {
    setFormData({ ...formData, recepcionist: "" });
  }

  const updateRecepcionistName = (e) => {
    setFormData({ ...formData, recepcionist: e.target.value });
  }

  return (
    <div className="recepcionist-container container-input">

      <label htmlFor="recepcionist-name">Recepcionista</label>
      
      <div className="container-input-with-button">
        <input value={recepcionist} list="recepcionists" onChange={updateRecepcionistName} />
        <img src="assets/image.png" className="clearButton" onClick={clearRecepcionistName} />
      </div>

      <datalist id="recepcionists">
        {recepcionistsNames.map((recep) => (<option key={recep}>{recep}</option>))}
      </datalist>
    </div>
  )
}