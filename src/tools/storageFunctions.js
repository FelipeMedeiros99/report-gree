const storageName = 'reportSystem';

export function getRecepcionistsNames() {
  let recepcionistList = localStorage.getItem(storageName);
  if (!recepcionistList) localStorage.setItem(storageName, "[]");
  return recepcionistList ? JSON.parse(recepcionistList).sort() : []
}

// export function saveNewRecepcionist(name) {
//   const names = getRecepcionistsNames();
//   names.push(name)
//   localStorage.setItem(storageName, JSON.stringify(names))
// }
