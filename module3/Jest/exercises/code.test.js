const utils = require("./code");
const uuid = require("uuid");

// 1.
describe("should return true if n is even, false otherwise", function () {
  test("check odd", () => {
    expect(utils.isEven(3)).toBeFalsy();
  });
  test("check even", () => {
    expect(utils.isEven(2)).toBeTruthy();
  });
  test("check not a number", () => {
    expect(utils.isEven("abc")).toBeFalsy();
  });
});

// 2.
describe("should remove at least one element from the array", function () {
  test("empty array", () => {
    expect(utils.removeAtLeastOne([]).length).toBe(0);
  });
  test("one length array", () => {
    expect(utils.removeAtLeastOne([1]).length).toBeLessThan(1);
  });
  test("no a special array", () => {
    expect(utils.removeAtLeastOne([1, 2, 3]).length).toBeLessThan(3);
  });
});

// 3.
describe("should return a clean string without special symbols", function () {
  test("empty string", () => {
    expect(utils.simplify("")).toBe("");
  });
  test("special chars only", () => {
    expect(utils.simplify("!#.,'")).toBe("");
  });
  test("without special chars", () => {
    expect(utils.simplify("abc")).toBe("abc");
  });
  test("special char at start", () => {
    expect(utils.simplify("#abc")).toBe("abc");
  });
  test("special char at the end", () => {
    expect(utils.simplify("abc#")).toBe("abc");
  });
  test("random string", () => {
    let str = "hello 123 !#.,'WORLD";
    expect(utils.simplify(str)).toBe(str.replace(/[^a-zA-Z0-9 ]/g, ""));
  });
});

// 4.
describe("validate function", function () {
  test("should return an error message when get an array witout at least one boolean", () => {
    expect(utils.validate(["abc"])).toEqual({
      error: "only boolean types inside the array",
    });
    expect(utils.validate([])).toEqual({
      error: "Need at least one boolean",
    });
  });

  test("more truty values than falsey", () => {
    expect(utils.validate([true, false, true])).toBe(true);
  });

  test("more falsey values than truty", () => {
    expect(utils.validate([true, false, false])).toBe(false);
  });
});

// Extension
