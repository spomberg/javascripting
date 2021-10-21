const number = process.argv.slice(2);

const diceRoller = function(number) {
  let output = '';

  for (let x = 0; x < number; x++) {
    let roll = Math.floor(Math.random() * 6);
    x < number - 1 ? output += roll + ', ' : output += roll;
  }

  return output;
};

console.log(`Rolled ${number} dice: ${diceRoller(number)}`);