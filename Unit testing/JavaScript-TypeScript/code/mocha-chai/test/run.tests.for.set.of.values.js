var chai = require('chai'),
    expect = chai.expect;

chai.should();

function Add(number1, number2){
    return number1 + number2;
}

describe('Test add function for a set of values', function(){
    var testValues = [
        {number1: 1, number2: 1, expected: 2},
        {number1: 2, number2: 2, expected: 4},
        {number1: 700, number2: 300, expected: 1000}
    ];

    testValues.forEach(function(test){
        it('Add function should return ' +
            test.expected +
            ' when passed ' +
            test.number1 +
            ' and ' +
            test.number2, function(){
                (Add(test.number1, test.number2)).should.equal(test.expected);
        });
    });
});