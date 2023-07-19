"use strict";

// TODO - write your code here.

//  #1
const randomDamage = () => Math.floor(Math.random() * 10 + 1);
console;

// #2

const chooseOption = (opt1, opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  return randNum ? opt2 : opt1;
};
//   if (randNum === 0) {
//     return opt2;
//   } else {
//     return opt1;
//   }
// };

//  # 3
const attackPlayer = function (health) {
  return health - randomDamage();
};

// # 4
const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

// #5

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

//  #6
const isDead = (health) => health <= 0;

// #7
const fight = (player1, player2, player1Health, player2Health) => {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health));
      {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health));
      {
        logDeath(player1, player2);
        break;
      }
    }
  }
};

fight("Conor", "Mitch", 100, 100);

// const getGrade(number) => {
//   if (getGrade >= 90);
//   return "A";
// } else if {

// }
