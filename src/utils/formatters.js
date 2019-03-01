const createFormatter = option => new Intl.NumberFormat("en-US", option);

export const formatCurrency = value => createFormatter({
  style: "currency",
  currency: "USD"
}).format(value);

export const formatPercent = value => createFormatter({
  style: "percent",
  maximumFractionDigits: 2
}).format(value);
