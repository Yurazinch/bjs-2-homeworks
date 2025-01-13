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
  
}