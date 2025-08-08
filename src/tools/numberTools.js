export function filterNumbers(value){
  return Number(String(value).replace(/\D/g, ""))
}

export function convertToFloat(value) {
  return filterNumbers(value) / 100
}

export function convertToMoneyFormat(value){
  const filteredNumbers = filterNumbers(value)/100
  const moneyFormat = new Intl.NumberFormat("pt-BR", {
    style: "currency", 
    currency: "BRL"
  }).format(filteredNumbers);
  
  return moneyFormat;
}