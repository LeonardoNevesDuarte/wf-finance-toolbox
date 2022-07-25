export class wfFinanceToolbox {

  /**
  * wfFinanceToolbox: Calculates the Present Value (PV) of an amount
  * Interest rates and periods must be set at same level
  * In case of Monthly rates, the periods must be expressed in Months
  * In case of Yearly rates, the periods must be expressed in Years
  * Interest rates must be provided in its natural format (ex.: 5.5% => 5.5)
  *
  * @param fv   Future value
  * @param i    Interest rate at period level
  * @param n    Number of periods
  * @returns    Present value 
  */
  calculatePV(fv: number, i: number, n: number): number {
    return (fv) / (Math.pow((1 + (i / 100)), n))
  }

  /**
  * wfFinanceToolbox: Calculates the Future Value (FV) of an amount
  * Interest rates and periods must be set at same level
  * In case of Monthly rates, the periods must be expressed in Months
  * In case of Yearly rates, the periods must be expressed in Years
  * Interest rates must be provided in its natural format (ex.: 5.5% => 5.5)
  *
  * @param pv   Present value
  * @param i    Interest rate at period level
  * @param n    Number of periods
  * @returns    Future value
  */
  calculateFV(pv: number, i: number, n: number): number {
    return (pv) * (Math.pow((1 + (i / 100)), n))
  }

  /**
  * wfFinanceToolbox: Calculates the Future Value (FV) of an investiment with regular Payments
  * Interest rates and periods must be set at same level
  * In case of Monthly rates, the periods must be expressed in Months
  * In case of Yearly rates, the periods must be expressed in Years
  * Interest rates must be provided in its natural format (ex.: 5.5% => 5.5)
  *
  * @param pv         Present value
  * @param pmt        Payment at every period
  * @param pmt_type   Payment is done at the beginning of each period (0) or at the end (1)
  * @param i          Interest rate at period level
  * @param n          Number of periods
  * @returns          Future value
  */
  calculateFVwithPayments(pv: number, pmt: number, pmt_type: number, i: number, n: number): number {
    const fv_of_pv = (pv) * (Math.pow((1 + (i / 100)), n))
    if(pmt_type == 0) {
      return ((pmt) * ((Math.pow((1 + (i / 100)), n) - 1) * (1 + (i/100))) / (i / 100)) + (fv_of_pv)
    } else {
      return ((pmt) * (Math.pow((1 + (i / 100)), n) - 1) / (i / 100)) + (fv_of_pv)
    }
  }

  /**
  * wfFinanceToolbox: Calculates the Payment for a Loan 
  * Interest rates and periods must be set at same level
  * In case of Monthly rates, the periods must be expressed in Months
  * In case of Yearly rates, the periods must be expressed in Years
  * Interest rates must be provided in its natural format (ex.: 5.5% => 5.5)
  *
  * @param v    Loan amount/value
  * @param i    Interest rate at period level
  * @param n    Number of periods
  * @returns    Payment value
  */
  calculatePayment(v: number, i: number, n: number): number {
    return (v) * (((i / 100) * Math.pow((1 + (i / 100)), n)) / (Math.pow((1 + (i / 100)), n) - 1))
  }

  /**
  * wfFinanceToolbox: Converts a Monthly rate to a Yearly rate
  * Interest rates must be provided in its natural format (ex.: 5.5% => 5.5)
  *
  * @param i    Interest rate at Monthly level
  * @returns    Interest rate at Yearly level
  */
  convertMontlhyRateToYearlyRate(i: number): number {
    /* 1 + yI = (1 + mI)^12 */
    return Math.pow((1 + (i / 100)), 12) - 1
  }

  /**
  * wfFinanceToolbox: Converts a Yearly rate to a Monthly rate
  * Interest rates must be provided in its natural format (ex.: 5.5% => 5.5)
  *
  * @param i    Interest rate at Yearly level
  * @returns    Interest rate at Monthly level
  */
  convertYearlyRateToMontlhyRate(i: number): number {
    /* 1 + yI = (1 + mI)^12 */
    return Math.pow((1 + (i / 100)), (1/12)) - 1
  }

  /**
  * wfFinanceToolbox: Converts an interest rate based on periods
  * Interest rates must be provided in its natural format (ex.: 5.5% => 5.5)
  *
  * @param i              Interest rate at base level
  * @param basePeriod     Base period of the rate provided
  * @param targetPeriod   Target period for the calculated rate
  * @returns              Interest rate at target periodo level
  */
  convertRateBasedOnPeriods(i: number, basePeriod: number, targetPeriod: number): number {
    /* 1 + yI = (1 + mI)^12 */
    const baseInterest = Math.pow((1 + (i / 100)), (1 / basePeriod)) - 1
    return Math.pow((1 + baseInterest), targetPeriod) - 1
  }
  
  /**
  * wfFinanceToolbox: Calculates a Loan at SAC table 
  * Interest rates and periods must be set at same level
  * In case of Monthly rates, the periods must be expressed in Months
  * In case of Yearly rates, the periods must be expressed in Years
  * Interest rates must be provided in its natural format (ex.: 5.5% => 5.5)
  *
  * @param v    Loan amount/value
  * @param i    Interest rate at period level
  * @param n    Number of periods
  * @returns    SAC table
  */
  calculateSACTable(v: number, i: number, n: number): any[] {
    let sacTable = [];
    let interest = v * (i / 100)
    let payment = (v / n) + interest
    let amortization = (v / n)
    let balance = v - amortization

    for (let a = 0; a < n; a++) {
      let sacTableLine = [(a + 1), parseFloat(payment.toFixed(2)), parseFloat(amortization.toFixed(2)), parseFloat(interest.toFixed(2)), parseFloat(balance.toFixed(2))]
      sacTable.push(sacTableLine)

      interest = balance * (i / 100)
      balance = balance - amortization
      payment = amortization + interest
    }
    return sacTable
  }

  /**
  * wfFinanceToolbox: Calculates a Loan at PRICE table 
  * Interest rates and periods must be set at same level
  * In case of Monthly rates, the periods must be expressed in Months
  * In case of Yearly rates, the periods must be expressed in Years
  * Interest rates must be provided in its natural format (ex.: 5.5% => 5.5)
  *
  * @param v    Loan amount/value
  * @param i    Interest rate at period level
  * @param n    Number of periods
  * @returns    PRICE table
  */
  calculatePRICETable(v: number, i: number, n: number): any[] {
    let priceTable = []
    let payment = (v) * (((i / 100) * Math.pow((1 + (i / 100)), n)) / (Math.pow((1 + (i / 100)), n) - 1))
    let interest = v * (i / 100)
    let amortization = payment - interest
    let balance = v - amortization

    for (let a = 0; a < n; a++) {
      let priceTableLine = [(a + 1), parseFloat(payment.toFixed(2)), parseFloat(amortization.toFixed(2)), parseFloat(interest.toFixed(2)), parseFloat(balance.toFixed(2))]
      priceTable.push(priceTableLine)

      interest = balance * (i / 100)
      amortization = payment - interest
      balance = balance - amortization
    }
    return priceTable
  }
}
