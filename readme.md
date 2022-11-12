# Price Formatter

A simple library for formatting prices.

## Installation

```
npm install price-formatter
```

or

```
yarn add price-formatter
```

## Usage

```
import { format } from '.';

format(1);
// returns $0.01;

format(10);
// returns $0.10

format(1000);
// returns $10.00

format(10000);
// returns $100.00

format(100000);
// returns $1,000.00
```
