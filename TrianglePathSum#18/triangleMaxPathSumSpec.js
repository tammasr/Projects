(function() {
    'use strict';
    var chai = require('chai');
    var assert = chai.assert;
    var path = require('./triangleMaxPathSum');

    describe('Triangle Max Path Sum', function () {

        it('should calculate max paths', function () {
            var testCase = {
                triangle: [[3], [1, 2], [3, 4, 5]]
            };
            assert.equal(path.maxPathSumTriangle.call(testCase), 10);
        });
    });
})();