import hoistingExample from "../../src/hoisting/hoistingExample";
describe("Unit test suite for hoisting", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("Should execute a function and validate the hoisting", () => {
    const expectValue = "Elmo";
    const consoleSpyOn = jest.spyOn(console, "log");

    hoistingExample.hoistingExample();

    expect(consoleSpyOn).toHaveBeenCalled();
    expect(consoleSpyOn).toHaveBeenCalledTimes(2);
    expect(consoleSpyOn.mock.calls[0][0]).toBeUndefined();
    expect(consoleSpyOn.mock.calls[1][0]).toBe(expectValue);
  });

  test("Should execute a return the name of the dog", () => {
    const expectValue = "The best dog is Firulais";
    const consoleSpyOn = jest.spyOn(console, "log");

    hoistingExample.nameOfDog();

    expect(consoleSpyOn).toHaveBeenCalled();
    expect(consoleSpyOn).toHaveBeenCalledTimes(1);
    expect(consoleSpyOn.mock.calls[0][0]).toBe(expectValue);
  });
});
