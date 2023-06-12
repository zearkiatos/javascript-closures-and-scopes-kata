import createPetList from "../../src/closure/createPetListClosure";
describe("Unit test suite for create a pet list", () => {
  test("Should make save a few pets and return a list and should return the pet list if it does not have params", () => {
    const expectedPetList = ["michi", "firulais"];

    const myPetList = createPetList();

    myPetList("michi");
    myPetList("firulais");
    const petList = myPetList();

    expect(petList).toEqual(expectedPetList);
  });
});
