var Throw = require('../throw');
var assert = require('chai').assert;

describe('Throw', function() {
  it('score is set', function() {

    var t = new Throw(180);
    assert.equal(180, t.score);
  });

  it('180 is valid score', function() {

    var t = new Throw(180);
    var isValid = t.isValid();
    assert.equal(true, isValid);
  });

  it('181 is invalid score', function() {

    var t = new Throw(181);
    var isValid = t.isValid();
    assert.equal(false, isValid);
  });

  it('100 is valid score', function() {

    var t = new Throw(100);
    var isValid = t.isValid();
    assert.equal(true, isValid);
  });

  it('0 is valid score', function() {

    var t = new Throw(0);
    var isValid = t.isValid();
    assert.equal(true, isValid);
  });

  it('163 is invalid score', function() {

    var t = new Throw(163);
    var isValid = t.isValid();
    assert.equal(false, isValid);
  });

  it('164 is valid score', function() {

    var t = new Throw(164);
    var isValid = t.isValid();
    assert.equal(true, isValid);
  });

  it('-1 is invalid score', function() {

    var t = new Throw(-1);
    var isValid = t.isValid();
    assert.equal(false, isValid);
  });

});
