var Player = require('../player');
var Throw = require('../Throw');
var assert = require('chai').assert;

describe('Player', function() {
  it('Player is set', function () {

    var p = new Player("Fred", 501);
    assert.equal("Fred", p.name);
    assert.equal(501, p.currentScore);
  }); 

  it('Player throw updates current score', function () {
    var p = new Player("Fred", 140);
    var t = new Throw(100);
    p.throwDarts(t);
    assert.equal(40, p.currentScore);
  });

  it('Player bust when throw score greater than current score', function () {
    var p = new Player("Fred", 140);
    var t = new Throw(141);
    var isBust = p.isBust(t);
    assert.equal(true, isBust);
  });

  it('Player bust when throw is one less than current score', function () {
    var p = new Player("Fred", 100);
    var t = new Throw(99);
    var isBust = p.isBust(t);
    assert.equal(true, isBust);
  });

  it('Player score does not change when busted', function () {
    var p = new Player("Fred", 100);
    var t = new Throw(99);
    p.throwDarts(t);
    assert.equal(100, p.currentScore);
  });

  it('Player throws winning score', function() {
    var p = new Player("Phil", 100);
    var t = new Throw(100);
    var isWinningScore = p.isWinningScore(t);
    assert.equal(true, isWinningScore);
  });

  it('Player throws winning score results in score being zero', function() {
    var p = new Player("Phil", 100);
    var t = new Throw(100);
    var isWinningScore = p.isWinningScore(t);
    p.throwDarts(t);
    assert.equal(true, isWinningScore);
    assert.equal(0, p.currentScore);
  });

  it('Player does not throw winning score', function() {
    var p = new Player("Phil", 100);
    var t = new Throw(45);
    var isWinningScore = p.isWinningScore(t);
    assert.equal(false, isWinningScore);
  });

});
