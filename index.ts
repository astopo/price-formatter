import { CURRENCIES } from "./utils/currencies";

export interface PriceFormatOptions {
  currency: string;
}

const DEFAULT_OPTIONS: PriceFormatOptions = {
  currency: 'USD'
}

export function format(price: number|string, options: PriceFormatOptions = DEFAULT_OPTIONS) {
  const { currency: currencyKey } = options;
  const currency = CURRENCIES[currencyKey];
  // TODO: handle NaN

  const priceString = String(price);

  const decimals = priceString.substring(priceString.length - currency.decimals);

  if (priceString.length < currency.decimals) {
    // TODO - handle leading 0's on decimals.
  }

  const rest = priceString.substring(0, priceString.length - currency.decimals) || '0';
  const reversed = rest.split('').reverse().join('');
  const matches = reversed.match(/.{1,3}/g);
  const finalRest = matches?.map(item => item.split('').reverse().join('')).reverse().join(currency.delimiter);

  // const formattedPrice: string = priceString.substring(0, priceString.length-currency.decimals) + "." + priceString.substring(priceString.length-currency.decimals);
  const formattedPrice: string = `${finalRest}${currency.decimalSymbol}${decimals}`;

  const symbol = currency.symbol;
  const prefix = currency.isPrefix ? symbol : '';
  const suffix = !currency.isPrefix ? symbol : '';

  return `${prefix}${formattedPrice}${suffix}`;
}