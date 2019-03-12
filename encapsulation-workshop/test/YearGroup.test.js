const chai = require('chai');
const expect = chai.expect;

const YearGroup = require('../classes/YearGroup');

describe('YearGroup', () => {
    it('should pass this test otherwise something is wrong', () => {
        let myYearGroup = new YearGroup()
        expect(myYearGroup).to.be.an.instanceOf(YearGroup);
    })
})