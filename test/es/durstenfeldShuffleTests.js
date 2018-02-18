'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { durstenfeldShuffle } from '../../es6'

const expect = chai.expect

// Test
describe('Durstenfeld Shuffle Algorithm: durstenfeldShuffle(input)', () => {
  it('Should return the input array with its indices\' values shuffled.', () => {
    expect(durstenfeldShuffle([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26]).toString()).to.not.eql([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26].toString())
  })
})
