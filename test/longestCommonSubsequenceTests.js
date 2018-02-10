/* eslint-env mocha */

'use strict'

// Native Node Modules
const path = require('path')

// NPM Modules
const expect = require('chai').expect

// Algorithm
const longestCommonSubsequence = require(path.join(__dirname, '..', 'algorithms', 'longestCommonSubsequence.js'))

// Test
describe('Longest Common Subsequence Algorithm: longestCommonSubsequence(input1, input2)', () => {
  it('Should return the Longest Common Subsequence in the input strings when there is at least one common character.', () => {
    expect(longestCommonSubsequence('test', 'es')).to.eql('es')
    expect(longestCommonSubsequence('tex', 'esr')).to.eql('e')
  })
  it('Should return -1 when there are no common substrings in the input strings.', () => {
    expect(longestCommonSubsequence('test', 'xyz')).to.eql(-1)
  })
})
