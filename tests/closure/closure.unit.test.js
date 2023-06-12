import closure from "../../src/closure/closure";
describe("Unit test suite for closure", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test("Should create a greeting with a name", () => {
    const expectedGreet = "Hello Pedro";

    const greet = closure.greeting();

    expect(greet()).toBe(expectedGreet);
  });

  test("Should save money without lexical scope", () => {
    const expectedMessage = "My moneyBox has: $20";
    const expectedSecondMessage = "My moneyBox has: $25";
    const consoleLogSpyOn = jest.spyOn(console, 'log');

    closure.myMoneyBox(20);
    closure.myMoneyBox(5);

    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenCalledTimes(2);
    expect(consoleLogSpyOn.mock.calls[0][0]).toBe(expectedMessage);
    expect(consoleLogSpyOn.mock.calls[1][0]).not.toBe(expectedSecondMessage);
  });

  test("Should save money with lexical scope", () => {
    const expectedMessage = "My moneyBox has: $20";
    const expectedSecondMessage = "My moneyBox has: $25";
    const expectedThirdMessage = "My moneyBox has: $30";
    const consoleLogSpyOn = jest.spyOn(console, 'log');

    const myMoneyBox = closure.myMoneyBoxClosure();
    myMoneyBox(20);
    myMoneyBox(5);
    myMoneyBox(5);

    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenCalledTimes(3);
    expect(consoleLogSpyOn.mock.calls[0][0]).toBe(expectedMessage);
    expect(consoleLogSpyOn.mock.calls[1][0]).toBe(expectedSecondMessage);
    expect(consoleLogSpyOn.mock.calls[2][0]).toBe(expectedThirdMessage);
  });
});