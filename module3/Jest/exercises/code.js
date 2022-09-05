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

const validate = function (arr) {};

module.exports = { isEven, removeAtLeastOne, simplify, validate };
