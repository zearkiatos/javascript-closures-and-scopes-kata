const varAssign = () => {
  var firstName;
  firstName = "Pedro";
  console.log(firstName);
};

const varReassign = () => {
  var lastname = "Capriles";
  console.log(lastname);
  lastname = "Rojas";
  console.log(lastname);
};

const letDeclaration = () => {
  let fruit = "🍎";
  console.log(fruit);
  fruit = "🥝";
  console.log(fruit);
};

const constReassign = () => {
  try {
    const animal = "🐶";
    console.log(animal);
    animal = "😼";
  } catch (ex) {
    throw ex;
  }
};

const constArrayAssign = () => {
  const vehicles = [];
  vehicles.push('🚗');
  console.log(vehicles);
  vehicles.pop();
  console.log(vehicles);
};

export default {
  varAssign,
  varReassign,
  letDeclaration,
  constReassign,
  constArrayAssign,
};
