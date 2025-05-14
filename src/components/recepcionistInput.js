export default function recepcionistInput() {
  const recepcionistList = getRecepcionistsNames()

  document.querySelector(".root").innerHTML += `
    <div class="recepcionist-container container-input">
      <label for="recepcionist-name">Recepcionista</label>
      <div class="container-input-with-button">
        <input type="text" id="recepcionist-name" list="recepcionists"/>
          <img src="assets/image.png" class="clearButton" onclick="clearRecepcionistName()"/>

      </div>
      <datalist id="recepcionists">
        ${recepcionistList.map((recep)=>(`<option>${recep}</option>`))}
      </datalist>
    </div>
    `;
}