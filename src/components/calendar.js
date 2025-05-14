export default function calendar(){
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth()+1).padStart(2, "0");
  const year = String(date.getFullYear());

  document.querySelector(".root").innerHTML += `
    <div class="container-input">
      <label>Data</label>
      <input type="date" value="${year}-${month}-${day}"/>
    </div>
  `
}
