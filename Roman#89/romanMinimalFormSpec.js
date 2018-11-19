(function() {
    'use strict';
    var chai = require('chai');
    var roman = require('./romanMinimalForm');
    var assert = chai.assert;

    describe('Roman Minimal Pattern', function () {
        it('should convert CDXVIIII to CDXIX : pattern  VIIII to IX', function () {

            assert.equal(roman.getOptimalRomanNumeral('CDXVIIII'), 'CDXIX');
        });

        it('should convert MMDCCCLXXXIIII to MMDCCCLXXXIV: pattern  IIII to IV', function () {

            assert.equal(roman.getOptimalRomanNumeral('MMDCCCLXXXIIII'), 'MMDCCCLXXXIV');
        });
        it('should convert MMMMCMLXXXXVIII to MMMMCMXCVIII: pattern  LXXXX to XC', function () {

            assert.equal(roman.getOptimalRomanNumeral('MMMMCMLXXXXVIII'), 'MMMMCMXCVIII');
        });

        it('should convert MMDXXXXI to MMDXLI: pattern  XXXX to XL', function () {

            assert.equal(roman.getOptimalRomanNumeral('MMDXXXXI'), 'MMDXLI');
        });
        it('should convert DCCCCXLIII to CMXLIII: pattern  DCCCC to CM', function () {

            assert.equal(roman.getOptimalRomanNumeral('DCCCCXLIII'), 'CMXLIII');
        });
        it('should convert MMCCCCXI to MMCDXI: pattern  CCCC to CD', function () {

            assert.equal(roman.getOptimalRomanNumeral('MMCCCCXI'), 'MMCDXI');
        });
    });
})();