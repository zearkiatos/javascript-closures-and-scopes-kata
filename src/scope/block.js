function fruits() {
  try {
    if (true) {
      var apple = "🍎";
      let kiwi = "🥝";
      const banana = "🍌";
    }
    console.log(apple);
    console.log(kiwi);
    console.log(banana);
  } catch (ex) {
    throw ex;
  }
}

function fruitsFixed() {
  try {
    if (true) {
      var apple = "🍎";
      let kiwi = "🥝";
      const banana = "🍌";
      console.log(kiwi);
      console.log(banana);
    }
    console.log(apple);
  } catch (ex) {
    throw ex;
  }
}

export default {
  fruits,
  fruitsFixed,
};
