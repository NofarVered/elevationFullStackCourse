function sum(a, b) {
  return a + b;
}

function calculateHyp(a, b) {
  return Math.sqrt(a * a + b * b);
}

function clearLowPriority(objects) {
  return objects.filter((elem) => elem.priority !== "LOW");
}

class PictureManager {
  constructor() {
    this.pictureURLs = [];
  }

  addPicture(picURL) {
    this.pictureURLs.push(picURL);
  }

  removePicture(picURL) {
    this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1);
  }
}

class ArrayManipulator {
  manipulate(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return { error: "Array lengths don't match" };
    } else {
      let obj = {};
      for (let i in arr1) {
        obj[arr1[i]] = arr2[i];
      }
      return obj;
    }
  }
}

module.exports = {
  sum,
  calculateHyp,
  clearLowPriority,
  PictureManager,
  ArrayManipulator,
};
