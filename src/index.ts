export class wfFinanceToolbox {

  /**
  * wfFinanceToolbox: Calculates the Present Value (PV)
  * Interest rates and periods must be set at same level
  * In case of Monthly rates, the periods must be expressed in Months
  * In case of Yearly rates, the periods must be expressed in Years
  *
  * @param fv   Future value
  * @param i    Interest rate at period level
  * @param n    Number of periods
  */
  calculatePV(fv: number, i: number, n: number) {
    return (fv) / (Math.pow((1 + (i / 100)), n))
  }
}


