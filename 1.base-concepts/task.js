"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let diskriminant = b ** 2 - 4 * a * c;

  if (diskriminant === 0) {
    arr.push(-b / (2 * a));
  } else if (diskriminant > 0) {
    arr.push((-b + Math.sqrt(diskriminant) )/(2 * a));
    arr.push((-b - Math.sqrt(diskriminant) )/(2 * a));
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let percentNormalize = ( percent / 100 ) / 12;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * ( percentNormalize + ( percentNormalize / ( Math.pow(1 + percentNormalize, countMonths) - 1 )));
  let overAmount = monthlyPayment * countMonths;

  return Math.round(overAmount * 100) / 100;

}