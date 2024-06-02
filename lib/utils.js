export const currencyFormatter = (amount) => {
  const formatter = Intl.NumberFormat("en-US", {
    currency: "IDR",
    style: "currency",
  });

  return formatter.format(amount);
};
