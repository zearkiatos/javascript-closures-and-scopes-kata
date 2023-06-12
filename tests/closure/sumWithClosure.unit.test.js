import sumWithClosure from "../../src/closure/sumWithClosure";
describe("Unit test suite for sum with closure", () => {
  test("Should make a sum of two numbers with closure", () => {
    const expectedValue = 5;
    const firstValue = 2;
    const secondValue = 3;

    const result = sumWithClosure(firstValue)(secondValue);

    expect(result).toBe(expectedValue);
  });

  test("Should make a sum with only one value", () => {
    const expectedValue = 90;
    const firstValue = 90;

    const result = sumWithClosure(firstValue)();

    expect(result).toBe(expectedValue);
  });
});
