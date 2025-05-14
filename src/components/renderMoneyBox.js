export default function renderMoneyBox() {

  const labels = ["Caixa", "Retiradas", "Caixa enviado"]
  document.querySelector(".root").innerHTML += `<div class="box-inputs-container"></div>`

  for (const label of labels) {
    if(label !== "Caixa enviado"){
      document.querySelector(".box-inputs-container").innerHTML += `
      <div class="container-input financy-input-container">
        <label for="${label}">${label}</label>
        <input type="text" id=${label} class="input-box" oninput="convertToMnoneyFormat(this)" value="R$ 0,00"/>
      </div>
      `
    }else{
      document.querySelector(".root").innerHTML += `
        <div class="container-input financy-input-container">
        <label for="${label.replace(" ", "_")}">${label}</label>
        <input type="text" id=${label.replace(" ", "_")}  class="input-box" oninput="convertToMnoneyFormat(this)" value="R$ 0,00"/>
      </div>`
    }
  }
}