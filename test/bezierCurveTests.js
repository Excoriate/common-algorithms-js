/* eslint-env mocha */

'use strict'

// Native Node Modules
const path = require('path')

// NPM Modules
const expect = require('chai').expect

// Algorithm
const bezierCurve = require(path.join(__dirname, '..', 'algorithms', 'bezierCurve.js'))

// Test
describe('Bezier Curve Algorithm: bezierCurve(points)', () => {
  it('Should return the correct bezier curve based on the specified array of points.', () => {
    let curve = bezierCurve([{x: 0, y: 0}, {x: 10, y: 3}])
    expect(JSON.stringify(curve.get(0.5))).to.eql('{"x":5,"y":1.5}')
  })
})
