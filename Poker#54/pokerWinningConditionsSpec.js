(function() {
    'use strict';
    var chai = require('chai');
    var Win = require('./pokerWinningConditions');
    var assert = chai.assert;

    describe('Winning Conditions', function () {
        it('should sort the cards', function () {
            assert.deepEqual(Win.sortCards(['8C', 'TS', 'KC', '9H', 'AC']), ['AC', 'KC', 'TS', '9H', '8C']);
        });

        it('should return High Card', function () {

            assert.equal(Win.highCard(['AC', 'KC', 'TS', '9H', '8C']), '14');
        });

        it('should check for One Pair', function () {

            assert.equal(Win.onePair(['AC', 'KC', 'TS', '9H', '9C']), 9);
        });

        it('should check for Two Pair and return boolean', function () {

            assert.equal(Win.twoPair(['AC', '8C', '8S', '9H', '9C']), true);
        });

        it('should check for Three Of A Kind', function () {

            assert.equal(Win.threeOfAKind(['AC', '8C', '8S', '8H', '9C']), 8);
        });

        it('should check for Four Of A Kind', function () {

            assert.equal(Win.fourOfAKind(['AC', '6C', '6S', '6H', '6C']), 6);
        });

        it('should check for Straight', function () {

            assert.equal(Win.straight(['7C', '6C', '5S', '4H', '3C']), true);
        });

        it('should check for Flush', function () {

            assert.equal(Win.flush(['7C', '8C', '3C', '2C', 'AC']), true);
        });

        it('should check for Full House', function () {

            assert.deepEqual(Win.fullHouse(['AC', '8C', '8S', '8H', 'AS']), [8, 14]);
        });

        it('should check for Straight Flush', function () {

            assert.deepEqual(Win.straightFlush(['7C', '6C', '5C', '4C', '3C']), true);
        });

        it('should check for Royal Flush', function () {

            assert.equal(Win.royalFlush(['AC', 'KC', 'QC', 'JC', 'TC']), true);
        });

    });
})();