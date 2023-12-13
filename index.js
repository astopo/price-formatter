"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = void 0;
const currencies_1 = require("./utils/currencies");
const DEFAULT_OPTIONS = {
    currency: 'USD'
};
function format(price, options = DEFAULT_OPTIONS) {
    const { currency: currencyKey } = options;
    const currency = currencies_1.CURRENCIES[currencyKey];
    if (isNaN(Number(price)))
        throw new Error('Invalid number.');
    const priceString = String(price);
    const priceNum = Number(priceString);
    if (priceNum === 0) {
        return currency.zeroValue;
    }
    const decimalValue = priceString.substring(priceString.length - currency.decimals);
    // Handle leading 0s on decimal value.
    const decimals = priceString.length < currency.decimals ? `0${decimalValue}` : decimalValue;
    const rest = priceString.substring(0, priceString.length - currency.decimals) || '0';
    const reversed = rest.split('').reverse().join('');
    const matches = reversed.match(/.{1,3}/g);
    const finalRest = matches === null || matches === void 0 ? void 0 : matches.map(item => item.split('').reverse().join('')).reverse().join(currency.delimiter);
    const formattedPrice = `${finalRest}${currency.decimalSymbol}${decimals}`;
    const symbol = currency.symbol;
    const prefix = currency.isPrefix ? symbol : '';
    const suffix = !currency.isPrefix ? symbol : '';
    return `${prefix}${formattedPrice}${suffix}`;
}
exports.format = format;
