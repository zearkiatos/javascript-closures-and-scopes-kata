import block from "../../src/scope/block";
describe("Unit test suites for block", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test("Should execute an get an error throw because of the incorrect block scope", () => {
    const expectedApple = "🍎";
    const expectedError = "kiwi is not defined";
    const consoleSpyOn = jest.spyOn(console, "log");

    expect(block.fruits).toThrow(expectedError);
    expect(consoleSpyOn).toHaveBeenCalled();
    expect(consoleSpyOn).toHaveBeenCalledTimes(1);
    expect(consoleSpyOn).toHaveBeenCalledWith(expectedApple);
  });

  test("Should execute three console log in its correct block scope", () => {
    const expectedApple = "🍎";
    const expectedKiwi = "🥝";
    const expectedBanana = "🍌";
    const consoleSpyOn = jest.spyOn(console, "log");

    block.fruitsFixed();

    expect(consoleSpyOn).toHaveBeenCalled();
    expect(consoleSpyOn).toHaveBeenCalledTimes(3);
    expect(consoleSpyOn.mock.calls[0][0]).toBe(expectedKiwi);
    expect(consoleSpyOn.mock.calls[1][0]).toBe(expectedBanana);
    expect(consoleSpyOn.mock.calls[2][0]).toBe(expectedApple);
  });
});
