export const currencyFormat = (priceStr: string) => {
  const numberValue = parseFloat(
    priceStr.replace(/[^\d,.]/g, "").replace(",", ".")
  );

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numberValue);
};
