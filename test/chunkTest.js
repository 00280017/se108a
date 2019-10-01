const assert = require('assert')
const _ = require('../ccclodash')

describe('ccclodash', function() {
  describe('chunk', function() {
    it("_.chunk(['a', 'b', 'c', 'd'], 2) equalTo [ [ 'a', 'b' ], [ 'c', 'd' ] ]", function() {
      assert.deepStrictEqual(_.chunk(['a', 'b', 'c', 'd'], 2), [ [ 'a', 'b'], ['c' , 'd' ] ])
    });
    it("_.chunk(['a', 'b', 'c', 'd'], 3) equalTo [ [ 'a', 'b', 'c' ], [ 'd' ] ]", function() {
      assert.deepStrictEqual(_.chunk(['a', 'b', 'c', 'd'], 3), [ [ 'a', 'b', 'c' ], [ 'd' ] ])
    });
    it("_.chunk(['a', 'b', 'c', 'd'], 3) notEqualTo [ [ 'a', 'b'], ['c' , 'd' ] ]", function() {
      assert.notDeepStrictEqual(_.chunk(['a', 'b', 'c', 'd'], 3), [ [ 'a', 'b'], ['c' , 'd' ] ])
    });
  });

  describe('drop', function() {
    it("_.drop([1, 2, 3], 2) equalTo [3]", function() {  //訊息
      assert.deepStrictEqual(_.drop([1, 2, 3], 2), [3])  //程式
    });
    it("_.drop([1, 2, 3], 0) equalTo [1, 2, 3]", function() {
      assert.deepStrictEqual(_.drop([1, 2, 3], 0), [1, 2, 3])
    });
    it("_.drop([1, 2, 3], 5) equalTo []", function() {
      assert.deepStrictEqual(_.drop([1, 2, 3], 5), [])
    });
    it("_.drop([1, 2, 3]) equalTo [2, 3]", function() {
      assert.deepStrictEqual(_.drop([1, 2, 3]), [2, 3])
    });
  });

  describe('dropRight', function() {
    it("_.dropRight([1, 2, 3], 2) equalTo [1]", function() {
      assert.deepStrictEqual(_.dropRight([1, 2, 3], 2), [1])
    });
    it("_.dropRight([1, 2, 3], 5) equalTo []", function() {
      assert.deepStrictEqual(_.dropRight([1, 2, 3], 5), [])
    });
    it("_.dropRight([1, 2, 3], 0) equalTo [1, 2, 3]", function() {
      assert.deepStrictEqual(_.dropRight([1, 2, 3], 0), [1, 2, 3])
    });
    it("_.dropRight([1, 2, 3]) equalTo [1, 2]", function() {
      assert.deepStrictEqual(_.dropRight([1, 2, 3]), [1, 2])
    });
  });


  let chai = require('chai'); //先執行npm install chai 才能用expect
  var expect = chai.expect;
  describe('head', function() {
    it("_.head([1, 2, 3]) equalTo [1]", function() {
      //assert.deepStrictEqual(_.head([1, 2, 3]), [1])
      expect(_.head([1, 2, 3])).to.deep.equal([1])
    });
    it("_.head([]) equalTo [undefined]", function() {
      //assert.deepStrictEqual(_.head([]), [undefined])
      expect(_.head([])).to.deep.equal([undefined])
    });
  });
})
