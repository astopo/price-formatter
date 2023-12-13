"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
console.log('should be $0.00', (0, _1.format)(0));
console.log('should be $0.01', (0, _1.format)(1));
console.log('should be $0.10', (0, _1.format)(10));
console.log('should be $10.00', (0, _1.format)(1000));
console.log('should be $100.00', (0, _1.format)(10000));
console.log('should be $1,000.00', (0, _1.format)(100000));
console.log('should be $10,000.00', (0, _1.format)(1000000));
console.log('should be $100,000.00', (0, _1.format)(10000000));
console.log('should be $1,000,000.00', (0, _1.format)(100000000));
