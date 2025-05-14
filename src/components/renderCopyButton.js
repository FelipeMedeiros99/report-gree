export default function renderCopyButton() {
  document.querySelector(".root").innerHTML += `<button onclick="copyInformations()" class="copy-button">Copiar</button>`
}
