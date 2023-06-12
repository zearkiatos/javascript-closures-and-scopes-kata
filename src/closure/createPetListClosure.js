const createPetList = () => {
  const pets = [];
  const save = (pet) => {
    if (!pet) return pets;
    pets.push(pet);
  };
  return save;
};

export default createPetList;
