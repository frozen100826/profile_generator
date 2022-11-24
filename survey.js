const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Whats an activity you like doing? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();

  rl.question('Which sport is your absolute favourite? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
  
    rl.close();
  


});

