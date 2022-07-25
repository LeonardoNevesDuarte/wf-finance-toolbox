# wf-finance-toolbox
Finance utility library for Node.js

## Index
* [Installation](#installation)
* [Dependencies](#dependencies)
* [Examples](#examples)
* [License](#license)
* [Uninstallation](#uninstallation)

## Installation
* This library/package can be easily installed by running
```npm install wf-finance-toolbox --save```

## Dependencies
* Node modules:
  * There's no dependencies in this library

## Examples
* Using javascript
```
const { wfFinanceToolbox } = require('wf-finance-toolbox');

const calculator = new wfFinanceToolbox;
const present_value = 1000;
const future_value = 1000;
const monthly_interest_rate = 1;
const periods = 12;
const payment = 100;
const payment_type_begin = 0;
const payment_type_end = 1;
const loan_amount = 50000;

const calculatedFutureValue = calculator.calculateFV(present_value, monthly_interest_rate, periods);
console.log('calculatedFutureValue: ', calculatedFutureValue); //Expected output: 1126.8250 ...

const calculatedPresentValue = calculator.calculatePV(future_value, monthly_interest_rate, periods);
console.log('calculatedPresentValue: ', calculatedPresentValue); //Expected output: 887.4492 ...

const calculatedFutureWithPaymentAtBegin = calculator.calculateFVwithPayments(present_value, payment, payment_type_begin, monthly_interest_rate, periods);
console.log('calculatedFutureWithPaymentAtBegin: ', calculatedFutureWithPaymentAtBegin); //Expected output: 2407.7578 ...

const calculatedFutureWithPaymentAtEnd = calculator.calculateFVwithPayments(present_value, payment, payment_type_end, monthly_interest_rate, periods);
console.log('calculatedFutureWithPaymentAtEnd: ', calculatedFutureWithPaymentAtEnd); //Expected output: 2395.0753 ...

const calculatedPayment = calculator.calculatePayment(loan_amount, monthly_interest_rate, periods);
console.log('calculatedPayment: ', calculatedPayment); //Expected output: 4442.4394 ...


```

* Using typescript
```
import { wfFinanceToolbox } from 'wf-finance-toolbox'


```
* Check other examples in [/src/examples.ts](https://github.com/LeonardoNevesDuarte/wf-finance-toolbox/blob/main/src/examples.ts)

## License
* This library is licensed under GNU General Public License v.3.0
* Please check the license content [here](https://github.com/LeonardoNevesDuarte/wf-finance-toolbox/blob/main/LICENSE)

## Uninstallation
* This library/package can be easily uninstalled by running
```npm uninstall wf-finance-toolbox```

