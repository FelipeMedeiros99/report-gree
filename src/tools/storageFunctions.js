export function getRecepcionistsNames() {
  let recepcionistList = localStorage.getItem("reportSystem");
  if (!recepcionistList) {
    localStorage.setItem("reportSystem", "[]");
    recepcionistList = "[]";
  }
  recepcionistList = JSON.parse(recepcionistList);
  return recepcionistList.sort();
}

export function saveNewRecepcionist(name) {
  const names = getRecepcionistsNames();
  names.push(name)
  localStorage.setItem("reportSystem", JSON.stringify(names))
}
