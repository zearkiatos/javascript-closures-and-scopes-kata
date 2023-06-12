import strictMode from "../../src/scope/strictMode";

describe("Unit test suites for strict mode", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test("Should get an error when the variable is not declared", () => {
    const expectedMessage = 'pi is not defined';

    expect(strictMode.normalAssign).toThrow(expectedMessage);
  });
});
