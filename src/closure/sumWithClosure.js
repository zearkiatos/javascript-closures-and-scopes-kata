const sumWithClosure = (firstValue) => {
  function sumTheSecondValue(secondValue = 0) {
    return firstValue + secondValue;
  }

  return sumTheSecondValue;
};

export default sumWithClosure;
