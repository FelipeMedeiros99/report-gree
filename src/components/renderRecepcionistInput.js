// import { addAtRoot, clearRecepcionistName } from "../tools/domFunctions";
// import { getRecepcionistsNames } from "../tools/storageFunctions";


// export default function renderRecepcionistInput() {
//   const recepcionistList = getRecepcionistsNames();
//   const container = document.createElement("div");
//   container.className = "recepcionist-container container-input"

//   container.innerHTML = `  
//       <label for="recepcionist-name">Recepcionista</label>
//       <div class="container-input-with-button">
//       <input type="text" id="recepcionist-name" list="recepcionists"/>
//       <img src="assets/image.png" class="clearButton"/>
//       </div>
      
//       <datalist id="recepcionists">
//         ${recepcionistList.map((recep) => (`<option>${recep}</option>`))}
//       </datalist>
//       `;
//   addAtRoot(container)
//   const img = container.querySelector("img");

//   img.addEventListener("click", () => clearRecepcionistName(container))
// }