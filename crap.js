var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*rl.question("What do you think of node.js? ", function(answer) {
  // TODO: Log the answer in a database
  console.log("Thank you for your valuable feedback:", answer);

  //rl.close();
});*/

var Foo = function() {
  this.name = "test";
}

Foo.prototype = {
  getInput: function() {
    rl.question("How are you doing? ", function(answer) {
      // TODO: Log the answer in a database
      console.log("Thank you for your valuable feedback:", answer);
      this.name = answer;
      rl.close();
    });
  },

  start: function() {
    console.log("here");
    this.getInput();
    console.log("My name is " + this.name);
  }
}

var foo = new Foo();
foo.start();