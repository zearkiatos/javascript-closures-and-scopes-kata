import lexical from "../../src/closure/lexical";
describe("Unit test suite for lexical closure", () => {
  test("Should show the lexical variable", () => {
    const expectedGlobal = 0;
    const expectedNumber = 1;
    const expectedInner = 2;
    const consoleSpyOn = jest.spyOn(console, "log");

    lexical.myFunction();

    expect(consoleSpyOn).toHaveBeenCalled();
    expect(consoleSpyOn.mock.calls[0][0]).toBe(expectedGlobal);
    expect(consoleSpyOn.mock.calls[1][0]).toBe(expectedNumber);
    expect(consoleSpyOn.mock.calls[1][1]).toBe(expectedGlobal);
    expect(consoleSpyOn.mock.calls[2][0]).toBe(expectedInner);
    expect(consoleSpyOn.mock.calls[2][1]).toBe(expectedNumber);
    expect(consoleSpyOn.mock.calls[2][2]).toBe(expectedGlobal);
  });
});
