import SkylabArray from "./SkylabArray";

describe("Given a class SkylabArray that receives methods and properties", () => {
  describe("When it´s called and receives a 5, 6 and 9", () => {
    test("Then it should receive an array of these values", () => {
      const value1 = 5;
      const value2 = 6;
      const value3 = 9;
      const expectedTotal = new SkylabArray(5, 6, 9);

      const total = new SkylabArray(value1, value2, value3);
      expect(total).toStrictEqual(expectedTotal);
    });
  });
});
