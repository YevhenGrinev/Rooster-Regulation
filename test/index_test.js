const assert = require('assert');
const Rooster = require('../index.js')

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      const expected = 'cock-a-doodle-doo!';
      const actual = Rooster.announceDawn();
      assert.equal(actual, expected);
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      const inputNum = 12
      const expected = '12';
      const actual = Rooster.timeAtDawn(inputNum);
      assert.strictEqual(actual, expected);
    });
    it('throws an error if passed a number less than 0', () => {
      const inputNum = -1
      const expected = RangeError;
      assert.throws( () => {
          Rooster.timeAtDawn(inputNum)},
          expected);
      });
    it('throws an error if passed a number less than 23', () => {
      const inputNum = 24
      const expected = RangeError;
      assert.throws( () => {
          Rooster.timeAtDawn(inputNum)},
          expected);
      });
  });   
})