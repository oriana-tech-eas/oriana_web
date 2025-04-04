export let USDollar = new Intl.NumberFormat('en-US');

export let PYGuarani = new Intl.NumberFormat('es-PY')

export const formatCurrency = ({ amount, currency }: {amount: number, currency: 'USD' | 'PYG'}) => {
  const availableCurrencies = {
    'USD': USDollar,
    'PYG': PYGuarani,
  }
  const formattedCurrency = availableCurrencies[currency].format(amount)

  return formattedCurrency;
}

export const formatDate = (date: string) => {
  const formattedDate = new Date(date).toLocaleDateString('es-PY', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return formattedDate;
}