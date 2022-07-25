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
const yearly_interest_rate = 10;
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

const yearlyRateFromMonthlyRate = calculator.convertMontlhyRateToYearlyRate(monthly_interest_rate);
console.log('yearlyRateFromMonthlyRate: ', yearlyRateFromMonthlyRate); //Expected output: 0.1268 ...

const monthlyRateFromYearlyRate = calculator.convertYearlyRateToMontlhyRate(yearly_interest_rate);
console.log('monthlyRateFromYearlyRate: ', monthlyRateFromYearlyRate); //Expected output: 0.0079 ...

//An overall rate of 50% in 18 months converted to a monthly rate
const convertedRate = calculator.convertRateBasedOnPeriods(50, 18, 1);
console.log('convertedRate: ', convertedRate); //Expected output: 0.0227 ...

//An overall rate of 50% in 18 months converted to a bi-monthly rate
const convertedRateBiMonthly = calculator.convertRateBasedOnPeriods(50, 18, 2);
console.log('convertedRate: ', convertedRateBiMonthly); //Expected output: 0.0460 ...

const sacTable = calculator.calculateSACTable(loan_amount, monthly_interest_rate, periods);
console.log('sacTable: ', sacTable) //Expected output
[
  [1, 4666.67, 4166.67, 500, 45833.33],
  [2, 4625, 4166.67, 458.33, 41666.67],
  [3, 4583.33, 4166.67, 416.67, 37500],
  [4, 4541.67, 4166.67, 375, 33333.33],
  [5, 4500, 4166.67, 333.33, 29166.67],
  [6, 4458.33, 4166.67, 291.67, 25000],
  [7, 4416.67, 4166.67, 250, 20833.33],
  [8, 4375, 4166.67, 208.33, 16666.67],
  [9, 4333.33, 4166.67, 166.67, 12500],
  [10, 4291.67, 4166.67, 125, 8333.33],
  [11, 4250, 4166.67, 83.33, 4166.67],
  [12, 4208.33, 4166.67, 41.67, 0]
]

const priceTable = calculator.calculatePRICETable(loan_amount, monthly_interest_rate, periods);
console.log('priceTable: ', priceTable) //Expected output
[
  [1, 4442.44, 3942.44, 500, 46057.56],
  [2, 4442.44, 3981.86, 460.58, 42075.7],
  [3, 4442.44, 4021.68, 420.76, 38054.01],
  [4, 4442.44, 4061.9, 380.54, 33992.11],
  [5, 4442.44, 4102.52, 339.92, 29889.6],
  [6, 4442.44, 4143.54, 298.9, 25746.05],
  [7, 4442.44, 4184.98, 257.46, 21561.07],
  [8, 4442.44, 4226.83, 215.61, 17334.25],
  [9, 4442.44, 4269.1, 173.34, 13065.15],
  [10, 4442.44, 4311.79, 130.65, 8753.36],
  [11, 4442.44, 4354.91, 87.53, 4398.45],
  [12, 4442.44, 4398.45, 43.98, 0]
]
```

* Using typescript
```
import { wfFinanceToolbox } from 'wf-finance-toolbox'


```

## License
* This library is licensed under GNU General Public License v.3.0
* Please check the license content [here](https://github.com/LeonardoNevesDuarte/wf-finance-toolbox/blob/main/LICENSE)

## Uninstallation
* This library/package can be easily uninstalled by running
```npm uninstall wf-finance-toolbox```

