export default function obsInput() {
  const labels = ["Devendo", "Observações"]
  for (const label of labels) {
    document.querySelector(".root").innerHTML += `
    <div class="container-input">
      <label for="obs-box">${label}</label>
      <textarea type="text" class="obs-box"></textarea>
    </div>
  `
  }
}