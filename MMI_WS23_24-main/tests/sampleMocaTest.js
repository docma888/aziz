const { assert } = require('chai');

const expect = require('chai').expect;

//Sample JUnit test
function sum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}

describe('#sum()', function () {

    //  if needed logic before each test run
    beforeEach(function () {

    })

    // test a functionality
    it('should add numbers', function () {
       const summe = sum([1,2,3,4,5]);
        assert.equal(summe,15)
       
        // expect(sum([1, 2, 3, 4, 5])).to.equal(15);
    })

});