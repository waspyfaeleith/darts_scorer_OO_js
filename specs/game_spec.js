var Game = require('../Game');
var Player = require('../player');
var assert = require('chai').assert;

describe('Game', function() {
  it('Game is set', function() {

    var g = new Game();
    assert.equal(501, g.startScore);
  });
});
