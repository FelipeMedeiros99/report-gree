export function filterNumbers(value){
  return Number(String(value).replace(/\D/g, ""))
}

export function convertToFloat(value) {
  return filterNumbers(value) / 100
}

export function convertToMoneyFormat(value){
  if(String(value).includes(",") || String(value).includes(".")){
    value = filterNumbers(value)/100
  }
  const moneyFormat = new Intl.NumberFormat("pt-BR", {
    style: "currency", 
    currency: "BRL"
  }).format(value);
  
  return moneyFormat;
}