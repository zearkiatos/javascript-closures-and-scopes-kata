const hoistingExample = () => {
  console.log(nameOfDog);
  var nameOfDog = "Elmo";
  console.log(nameOfDog);
};

function nameOfDog() {
  console.log(`The best dog is ${theDog}`);
}

var theDog = "Firulais";

export default {
  hoistingExample,
  nameOfDog,
};
