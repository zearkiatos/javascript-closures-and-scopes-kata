import functionScope from "../../src/scope/functionScope";
describe("Unit test suites for function scope", () => {
  test("Should execute a greeting function and evaluate with function scope", () => {
    const expectValue = "Hello Ana!";
    const consoleSpyOn = jest.spyOn(console, "log");

    functionScope.greeting();

    console.log(consoleSpyOn.mock);

    expect(consoleSpyOn).toHaveBeenCalled();
  });
});
