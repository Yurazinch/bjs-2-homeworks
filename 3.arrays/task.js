function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
}

//вариант1
function getUsersNamesInAgeRange(users, gender) {
  if (users.length < 1 || (gender != 'мужской' && gender != 'женский')) {
    return 0;
  } 
  let ages = users.filter(element => element.gender === gender).map(element => element.age);
  let ageTotal = ages.reduce((total, item) => total + item, 0);
  return ageTotal / ages.length;
}

//вариант 2
/*function getUsersNamesInAgeRange(users, gender) {
  if (users.length < 1 || (gender != 'мужской' && gender != 'женский')) {
    return 0;
  } 
  users.filter(element => element.gender === gender).map(element => element.age).reduce((total, item, index, array) => {
    total + item;
    if (index === array.length - 1) {
      return total / array.length;
    }
  }, 0);
}  */