import SkylabArray from "./SkylabArray";

describe("Given a class SkylabArray that receives methods and properties", () => {
  describe("When it's called and receives a 5, 6 and 9", () => {
    test("Then it should receive an array of these values", () => {
      const value1 = 5;
      const value2 = 6;
      const value3 = 9;
      const expectedTotal = new SkylabArray(5, 6, 9);

      const total = new SkylabArray(value1, value2, value3);
      expect(total).toStrictEqual(expectedTotal);
    });
  });

  describe("When it's called with push method and receives a number 666 argument", () => {
    test("Then it should push 666 number to the array and return the new length of the array", () => {
      const value1 = 666;
      const arrayLength = 2;
      const testArray = new SkylabArray(333);

      testArray.push(value1);

      expect(testArray[testArray.length - 1]).toBe(value1);
      expect(testArray.length).toBe(arrayLength);
    });
  });
});
