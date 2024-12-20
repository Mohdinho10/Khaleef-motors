export function formatCurrency(value) {
  return new Intl.NumberFormat("sw-TZ", {
    style: "currency",
    currency: "TZS", // Change the currency to TZS
    minimumFractionDigits: 0, // Optional: Set to 0 if you don't want decimal places
  }).format(value);
}
