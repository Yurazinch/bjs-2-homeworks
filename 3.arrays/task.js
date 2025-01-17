function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  if (users.length < 1 || (gender != 'мужской' && gender != 'женский')) {
    return 0;
  } 
  let ages = users.filter(element => element.gender === gender).map(element => element.age);
  let ageTotal = ages.reduce((total, item) => total + item, 0);
  return ageTotal / ages.length;
}