export const CURRENCIES: Record<string, any> = {
  USD: {
    symbol: '$',
    isPrefix: true,
    delimiter: ',',
    decimalSymbol: '.',
    decimals: 2,
    zeroValue: '$0.00'
  },
  CAD: {
    symbol: '$',
    isPrefix: true,
    delimiter: ',',
    decimalSymbol: '.',
    decimals: 2,
    zeroValue: '$0.00'
  },
  EUR: {
    symbol: '€',
    isPrefix: false,
    delimiter: '.',
    decimalSymbol: ',',
    decimals: 2,
    zeroValue: '0,00€'
  },
  GBP: {
    symbol: '£',
    isPrefix: true,
    delimiter: ',',
    decimalSymbol: '.',
    decimals: 2,
    zeroValue: '0.00£'
  },
  MXN: {
    symbol: '$',
    isPrefix: true,
    delimiter: ',',
    decimalSymbol: '.',
    decimals: 2,
    zeroValue: '$0.00'
  }
};
