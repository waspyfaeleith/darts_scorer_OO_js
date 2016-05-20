var Player = require('./player');
var Throw = require('./throw');

var readline = require("readline");
var readlineSync = require('readline-sync');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var Game = function() {
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
    var name = readlineSync.question('Enter player ' + playerNum + ' name :',  { hideEchoBack: false });
    console.log(name);
    return name;
  },

  start: function() {
    var playerName = this.getPlayer(1);

    this.player1 = new Player(playerName, this.startScore);

    playerName = this.getPlayer(2);

    this.player2 = new Player(playerName, this.startScore);
    console.log(this.player1.name + ' vs ' + this.player2.name);
    this.thrower = this.player1;
  },

  getPlayerScore: function() {
    if (this.thrower.isOnAFinish()) {
      console.log("\n\n" + this.thrower.name + ", you require " + this.thrower.currentScore);
    }
    var score = readlineSync.question('\n\nEnter player ' + this.thrower.name + ' score :',  { hideEchoBack: false });
    var t = new Throw(parseInt(score));
    
    while (!t.isValid()) { 
      var score = readlineSync.question('\n\nEnter player ' + this.thrower.name + ' score :',  { hideEchoBack: false }); 
      t.score = parseInt(score); 
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
        console.log("\t" + (this.player1.scores.length > i ? this.player1.scores[i] : " ") +  "\t | \t" + (this.player2.scores.length > i ? this.player2.scores[i] : " "));
      }
  },

  play: function() {
    this.start();
    this.printScoreboard();  
    do {
      this.getPlayerScore();
      this.printScoreboard();
    } while (this.winner == null);
    
    console.log("\nGame shot, and the leg, to " + this.winner.name);
  }
}

module.exports = Game;