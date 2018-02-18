'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es5')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Longest Common Substring ES5 Algorithm: longestCommonSubstring(input1, input2)', function () {
  it('Should return the longest common substring in the input strings when there is at least one common substring.', function () {
    expect((0, _es.longestCommonSubstring)('test', 'est')).to.eql('est')
    expect((0, _es.longestCommonSubstring)('tes', 'est')).to.eql('es')
  })
  it('Should return -1 when there are no common substrings in the input strings.', function () {
    expect((0, _es.longestCommonSubstring)('test', 'xyz')).to.eql(-1)
  })
})
