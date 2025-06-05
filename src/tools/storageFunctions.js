const storageName = 'reportSystem';

export function getLocalStorageData() {
  let localStorageData = localStorage.getItem(storageName);
  localStorageData = JSON.parse(localStorageData);
  return localStorageData
}

export function saveNewRecepcionist(name) {
  const data = getLocalStorageData();
  const recepcionistsNames = data.recepcionistsNames;
  recepcionistsNames.push(name);
  localStorage.setItem(storageName, JSON.stringify({...data, recepcionistsNames}))
}
