import { format } from '.';

console.log('should be $0.01', format(1));
console.log('should be $0.10', format(10));
console.log('should be $10.00', format(1000));
console.log('should be $100.00', format(10000));
console.log('should be $1,000.00', format(100000));
console.log('should be $10,000.00', format(1000000));
console.log('should be $100,000.00', format(10000000));
console.log('should be $1,000,000.00', format(100000000));