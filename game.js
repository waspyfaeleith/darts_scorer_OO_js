var Player = require('./player');
var Throw = require('./throw');

var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var Game = function() {
  //this.player1 = new Player();
  //this.player2 = new Player();
  //this.thrower = new Player();
  //this.winner = new Player();
  this.startScore = 501;
}

Game.prototype = {
  changeThrower: function() {
    if (this.thrower == this.player1) {
      this.thrower = this.player2;
    } else {
      this.thrower = this.player1;
    }
  },

  getPlayer: function(playerNum) {
    var name;
    rl.question("Enter player " + playerNum + " name: ", function(answer) {
      //name = answer;
      console.log("You entered: " + answer);
      rl.close();
      process.stdin.destroy();
    });
    return name;
  },

  myInput : function (prompt, callback) {
      rl.question(prompt, function (x) {
        console.log(x);
          rl.close();
          callback(x);
      });
  },

  start: function() {
    //this.getPlayer(1);
    //console.log("Enter player 1 name: ");
    /*var playerName;
    prompt.question("Enter player 1 name: ", function(answer) {
      playerName = answer;
      console.log("You entered: " + answer);
      rl.close();
      process.stdin.destroy();
    });
    */
    var playerName = this.getPlayer(1);

    this.player1 = new Player(playerName, this.startScore);
/*
    prompt.question("Enter player 2 name: ", function(answer) {
      playerName = answer;
      console.log(answer);
      rl.close();
      process.stdin.destroy();
    }.bind(this));
    this.player1 = new Player(playerName, this.startScore);
    //console.log("Enter player 2 name: ");
    //input = "Barney";
    
    this.thrower = this.player1;
    this.winner = null;*/
    console.log(this.player1.name )//+ ' vs ' + this.player2.name);
  },

  getPlayerScore: function() {
    if (this.thrower.isOnAFinish()) {
      console.log("\n\n" + this.thrower.name + ", you require " + this.thrower.currentScore);
    }
    console.log("\n\nEnter " + this.thrower.name + "'s score: ");
    input = 100;
    var t = new Throw(parseInt(input));
    
    while (!t.isValid()) {
      console.log("\nInvalid Score - enter " + this.thrower.name + "'s score: ");
      input = 100;
      t.score = parseInt(input);    
    }
          
    this.thrower.throwDarts(t);
    if (this.thrower.currentScore == 0)
      this.winner = this.thrower;
    this.printScoreboard();
    this.changeThrower();
  },

  scoreBoardLength: function (){
    if (this.player1.scores.length > this.player2.scores.length)
    {
        return this.player1.scores.length;
    } else {
      return this.player2.scores.length;
    }
  },

  printScoreboard: function() {
      console.log("\n\t\t" + this.startScore);
      console.log("\n\t" + this.player1.name + "\t | \t" + this.player2.name);
      console.log("----------------------------------");
      
      for (var i = 0; i < this.scoreBoardLength(); i++)
      {
        console.log("\t" + (this.player1.scores.length > i ? this.player1.scores[i] : "\t | \t") + (this.player2.scores.length > i ? this.player2.scores[i] : " "));
      }
  },

  play: function() {
    this.start();
    this.printScoreboard();  
    /*do {
      //this.getPlayerScore();
      this.printScoreboard();
    } while (this.winner == null);*/
    
    console.log("\nGame shot, and the leg, to " + this.winner.name);
  }

}

module.exports = Game;
//console.log('Lets really play darts!');
//var g = new Game();
//g.play();