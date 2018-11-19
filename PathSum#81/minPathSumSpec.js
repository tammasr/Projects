(function() {
    'use strict';
    var assert = require('chai').assert;
    var path = require('./minPathSum');

    describe('Path Sum', function () {

        it('should calculate minimum path of empty array and output 0', function () {
            assert.equal(path.minPathSum([]), 0);
        });

        it('should calculate minimum path of [[1,2,3],[4,5,6],[7,8,9]] and output 21', function () {
            assert.equal(path.minPathSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), 21);
        });

        it('should calculate minimum path [[114,244,322],[656,545,623],[753,538,569], [555,344,989]] and outout 1333', function () {
            assert.equal(path.minPathSum([[114, 244, 322], [656, 545, 623], [753, 538, 569], [555, 344, 989]]), 1333);
        });
    });
})();