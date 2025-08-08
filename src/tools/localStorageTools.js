import { getDateToday } from "./dateTools.js";

const storageName = 'reportSystem';

export function getLocalStorageData() {
  let data = localStorage.getItem("reportSystem");
  const defaultData = {
    recepcionistsNames: [], formData: {
      recepcionist: "",
      date: getDateToday(),
      counterInputs: { "Ocupação total": 50, "Previsão reservas": 0, "Check-in": 0, "Renovação": 0 },
      money: { Caixa: "R$ 0,00", Retiradas: "R$ 0,00", "Caixa enviado": "R$ 0,00" },
      debtors: "",
      observations: ""
    }
  }
  if (!data) {
    localStorage.setItem("reportSystem", JSON.stringify(defaultData))
    data = defaultData;
  } else if (!JSON.parse(data).recepcionistsNames || !JSON.parse(data).formData) {
    localStorage.setItem("reportSystem", JSON.stringify(defaultData))
    data = defaultData;
  } else {
    data = JSON.parse(data)
  }
  return data
}

export function saveNewRecepcionist(name) {
  const data = getLocalStorageData();
  const { recepcionistsNames } = data;
  const doesRecepcionistExists = recepcionistsNames.indexOf(name) > -1
  
  if (!doesRecepcionistExists) {
    recepcionistsNames.push(name);
    localStorage.setItem(storageName, JSON.stringify({ ...data, recepcionistsNames }))
  }
  
}