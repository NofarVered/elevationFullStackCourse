const isEven = function (n) {
  return n % 2 == 0 ? true : false;
};

const removeAtLeastOne = function (arr) {
  let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
  arr.splice(0, numItemsToRemove);
  return arr;
};

const simplify = function (str) {
  let symbols = ["!", "#", ".", ",", "'"];
  return str
    .split("")
    .filter((c) => symbols.indexOf(c) == -1)
    .join("");
};

const validate = function (arr) {
  let booleanObj = { true: 0, false: 0 };

  for (const elem of arr) {
    if (elem === true) {
      booleanObj.true += 1;
    } else if (elem === false) {
      booleanObj.false += 1;
    }
  }

  if (booleanObj.true === 0 && booleanObj.false === 0) {
    return "Error: array is supposed to contain at least one boolean value";
  } else {
    return booleanObj.true > booleanObj.false ? true : false;
  }
};

module.exports = { isEven, removeAtLeastOne, simplify, validate };
