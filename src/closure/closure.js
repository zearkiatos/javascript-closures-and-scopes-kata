function greeting() {
  const username = "Pedro";
  const displayUsername = () => {
    return `Hello ${username}`;
  };
  return displayUsername;
}

function myMoneyBox(coins) {
  let saveCoins = 0;
  saveCoins += coins;
  console.log(`My moneyBox has: $${saveCoins}`);
}

function myMoneyBoxClosure() {
  let saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`My moneyBox has: $${saveCoins}`);
  };
  return countCoins;
}

export default {
  greeting,
  myMoneyBox,
  myMoneyBoxClosure,
};
