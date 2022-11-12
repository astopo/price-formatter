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
    // TODO: handle NaN
    const priceString = String(price);
    const decimals = priceString.substring(priceString.length - currency.decimals);
    if (priceString.length < currency.decimals) {
        // TODO - handle leading 0's on decimals.
    }
    const rest = priceString.substring(0, priceString.length - currency.decimals) || '0';
    const reversed = rest.split('').reverse().join('');
    const matches = reversed.match(/.{1,3}/g);
    const finalRest = matches === null || matches === void 0 ? void 0 : matches.map(item => item.split('').reverse().join('')).reverse().join(currency.delimiter);
    // const formattedPrice: string = priceString.substring(0, priceString.length-currency.decimals) + "." + priceString.substring(priceString.length-currency.decimals);
    const formattedPrice = `${finalRest}${currency.decimalSymbol}${decimals}`;
    const symbol = currency.symbol;
    const prefix = currency.isPrefix ? symbol : '';
    const suffix = !currency.isPrefix ? symbol : '';
    return `${prefix}${''}${formattedPrice}${suffix}`;
}
exports.format = format;
