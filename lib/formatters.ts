export function formatCurrency(value: number, decimals: number = 0): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function formatNumber(value: number, decimals: number = 0): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function formatPercent(value: number, decimals: number = 1): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(decimals)}%`;
}

export function formatLargeNumber(value: number): string {
  if (value >= 1000) {
    return `₺${(value / 1000).toFixed(1)}B`;
  }
  return `₺${value.toFixed(0)}M`;
}

export function formatMultiple(value: number, decimals: number = 1): string {
  return `${value.toFixed(decimals)}x`;
}
