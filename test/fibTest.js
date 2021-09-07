const Fibo = require('../fibonacci');
const Perfect = require('../perfectSquare')
const chai = require('chai');
const assert = chai.assert;

// assert.isTrue(isFibannoci(2), true)

describe('Test first for perfectSquare', () => {
    const square = new Perfect();

    it('Check if 11 is a perfectsquare', () => {
        assert.isTrue(square.isPerfectSquare(11),'true')
    });
    it('Check if 4 is a perfectsquare', () => {
        assert.isTrue(square.isPerfectSquare(4),'true')
    });
    })

describe('Test first for Fibannocci', () => {
    const f = new Fibo();

    it('Check if -1 is a Fibannoci number', () => {
        assert.isTrue(f.isFibonacci(-1),'true')        
    });
    it('Check if 4 is a Fibannoci', () => {
        assert.isTrue(f.isFibonacci(4),'true')
    });
    })
