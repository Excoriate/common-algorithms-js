'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es5')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Hamming Distance ES5 Algorithm: hammingDistance(s1, s2)', function () {
  it('Should return the correct Hamming distance between two strings of equal length.', function () {
    expect((0, _es.hammingDistance)('test', 'rtst')).to.eql(2)
  })
  it('Should return -1 if the two strings are not of equal length.', function () {
    expect((0, _es.hammingDistance)('test', 'rts')).to.eql(-1)
  })
})
