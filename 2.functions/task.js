function getArrayParams(...arr) {

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr [i];
    }
    sum = sum + arr[i];
  }
  let avgFull = sum / arr.length;
  avg = parseFloat(avgFull.toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length < 1) {
    return 0;
  }      
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }  
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length < 1) {
    return 0;
  }
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
     max = arr[i];
    }
    if (arr[i] < min) {
      min = arr [i];    
    }
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length < 1) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
    } else {
      sumOddElement = sumOddElement + arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length < 1) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement = countEvenElement + 1;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = 0;
  let workResult;
  for (let i = 0; i < arrOfArr.length; i++) {      
    workResult = func(...arrOfArr[i]);    
    if (workResult > maxWorkerResult) {
      maxWorkerResult = workResult;
    }
  }
  return maxWorkerResult;
}