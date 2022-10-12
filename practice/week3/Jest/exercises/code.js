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
  if (arr.length < 1) {
    return { error: "Need at least one boolean" };
  }
  let errorFactor = 0;
  arr.forEach((element) => {
    typeof element == "boolean" ? null : (errorFactor = 1);
  });
  if (errorFactor == 1) {
    return { error: "only boolean types inside the array" };
  }
  const count = arr.filter(Boolean).length;
  return count > Math.floor(arr.length / 2);
};

//  Extension exercise
const add = function (x, y) {
  let stuff = [];
  stuff.push(x, y);
};

module.exports = { isEven, removeAtLeastOne, simplify, validate, add };
