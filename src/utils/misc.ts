export function numberToDolar(n: number) {
  return new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  }).format(n)
}
