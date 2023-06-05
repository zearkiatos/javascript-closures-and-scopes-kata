import reassignAndRedeclaration from "../../src/scope/reassignAndRedeclaration";

describe("Unit test suites for block", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test("Should execute a function an should get console output with a firstname", () => {
    const expectedFirstName = "Pedro";
    const consoleSpyOn = jest.spyOn(console, "log");

    reassignAndRedeclaration.varAssign();

    expect(consoleSpyOn).toHaveBeenCalled();
    expect(consoleSpyOn).toHaveBeenCalledTimes(1);
    expect(consoleSpyOn).toHaveBeenCalledWith(expectedFirstName);
  });

  test("Should execute a function an should get console output with a lastname reassigned", () => {
    const expectedLastName = "Capriles";
    const expectedLastNameReassigned = "Rojas";
    const consoleSpyOn = jest.spyOn(console, "log");

    reassignAndRedeclaration.varReassign();

    expect(consoleSpyOn).toHaveBeenCalled();
    expect(consoleSpyOn).toHaveBeenCalledTimes(2);
    expect(consoleSpyOn.mock.calls[0][0]).toBe(expectedLastName);
    expect(consoleSpyOn.mock.calls[1][0]).toBe(expectedLastNameReassigned);
  });

  test("Should reassign a variable with let", () => {
    const expectedApple = "🍎";
    const expectedKiwi = "🥝";
    const consoleSpyOn = jest.spyOn(console, "log");

    reassignAndRedeclaration.letDeclaration();

    expect(consoleSpyOn).toHaveBeenCalled();
    expect(consoleSpyOn).toHaveBeenCalledTimes(2);
    expect(consoleSpyOn.mock.calls[0][0]).toBe(expectedApple);
    expect(consoleSpyOn.mock.calls[1][0]).toBe(expectedKiwi);
  });

  test("Should get throw error when try to reassign in a const", () => {
    const expectedDog = "🐶";
    const expectedError = "\"animal\" is read-only";
    const consoleSpyOn = jest.spyOn(console, "log");

    expect(reassignAndRedeclaration.constReassign).toThrow(expectedError);
    expect(consoleSpyOn).toHaveBeenCalled();
    expect(consoleSpyOn).toHaveBeenCalledTimes(1);
    expect(consoleSpyOn.mock.calls[0][0]).toBe(expectedDog);
  });

  test("Should declarate an array", () => {
    const expectedVehiclesAfterPop = [];
    const consoleSpyOn = jest.spyOn(console, "log");

    reassignAndRedeclaration.constArrayAssign();

    expect(consoleSpyOn).toHaveBeenCalled();
    expect(consoleSpyOn).toHaveBeenCalledTimes(2);
    expect(consoleSpyOn.mock.calls[1][0]).toEqual(expectedVehiclesAfterPop);
  });


});
