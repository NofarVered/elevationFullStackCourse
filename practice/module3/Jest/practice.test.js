const utils = require("./practice");

test("adds 1 + 2 to equal 3", () => {
  expect(utils.sum(1, 2)).toBe(3);
});

test("should return the square root of the sum of the squares", function () {
  let c = utils.calculateHyp(3, 4);
  expect(c).toBe(5);
});

test("should keep only HIGH priority tasks", () => {
  let tasks = [
    { text: "dummy", priority: "HIGH" },
    { text: "dummy", priority: "LOW" },
  ];
  let filtered = utils.clearLowPriority(tasks);

  filtered.forEach((t) => {
    expect(t.priority).toBe("HIGH");
  });
});

test("addPicture should add a picture URL to the pictureURLs array", function () {
  const picManager = new utils.PictureManager();
  expect(picManager.pictureURLs.length).toBe(0);
  picManager.addPicture("some_url");
  expect(picManager.pictureURLs.length).toBe(1); //test
  expect(picManager.pictureURLs).toContain("some_url"); //double check
});

test("removePicture should receive a picture URL and remove it from the pictureURLs array", function () {
  const picManager = new utils.PictureManager();
  expect(picManager.pictureURLs.length).toBe(0);

  picManager.addPicture("some_url");
  picManager.addPicture("some_url2");
  picManager.addPicture("some_url3");

  picManager.removePicture("some_url2");
  expect(picManager.pictureURLs.length).toBe(2);
  expect(picManager.pictureURLs.length).not.toContain("some_url2");
});

test("should convert two arrays of equal length to a single object with key-values from the arrays", () => {
  let arrayManipulator = new utils.ArrayManipulator();
  let x = ["food", "item", "location"];
  let y = ["cherry", "lightbulb", "Tazmania"];
  let result = arrayManipulator.manipulate(x, y);
  expect(result).toEqual({
    food: "cherry",
    item: "lightbulb",
    location: "Tazmania",
  });
});

test("should return a message when array lengths don't match", () => {
  let arrayManipulator = new utils.ArrayManipulator();
  let x = ["food", "item", "location"];
  let y = ["cherry", "lightbulb"];
  let output = arrayManipulator.manipulate(x, y);
  expect(output).toEqual({ error: "Array lengths don't match" });
});
