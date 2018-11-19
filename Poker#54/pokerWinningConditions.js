/**
 * @file Functions to help  determine the win
 */

const constants = require("./constants");

var Win = {

    sortCards: function sortCards(hand) {
        return hand.sort(function (a, b) {
            return constants.cardMap[b[0]] - constants.cardMap[a[0]];
        });
    },

    highCard: function highCard(pHand) {
        return constants.cardMap[pHand[0][0]];
    },

    onePair: function onePair(hand) {
        for (var i = 0; i < hand.length - 1; i++) {
            if (hand[i][0] === hand[i + 1][0]) return constants.cardMap[hand[i][0]];
        }
        return false;
    },

    twoPair: function twoPair(pHand) {
        let pairs = [];
        for (let i = 0; i < constants.pHandLen - 1; i++) {
            if (pHand[i][0] === pHand[i + 1][0]) {
                pairs.push(true);
                i++;
            }
        }
        if (pairs.length === 2) {
            return true;
        }
        return false;
    },

    threeOfAKind: function threeOfAKind(pHand) {
        for (let i = 0; i < constants.pHandLen - 2; i++) {
            let curr = pHand[i][0];
            if (curr === pHand[i + 1][0] && curr === pHand[i + 2][0]) {
                return constants.cardMap[pHand[i][0]];
            }
        }
        return false;
    },

    fourOfAKind: function fourOfAKind(pHand) {
        for (let i = 0; i < constants.pHandLen - 3; i++) {
            if (pHand[i][0] === pHand[i + 1][0] &&
                pHand[i + 1][0] === pHand[i + 2][0] &&
                pHand[i + 2][0] === pHand[i + 3][0]) {
                return pHand[i][0];
            }
        }
        return false;
    },

    straight: function straight(pHand) {
        let count = 1;
        for (let i = 0; i < constants.pHandLen - 1; i++) {
            if (constants.cardMap[pHand[i][0]] - constants.cardMap[pHand[i + 1][0]] === 1) {
                count++;
            }
        }
        if (count === constants.pHandLen) {
            return true;
        }
        return false;
    },

    flush: function flush(pHand) {
        for (var i = 1; i < pHand.length; i++) {
            if (pHand[i][1] !== pHand[0][1]) return false;
        }
        return true;
    },

    fullHouse: function fullHouse(pHand) {
        let threeKindNumber = this.threeOfAKind(pHand);
        let onePairValue = '';
        if (threeKindNumber) {
            let remaining = pHand.filter((x) => {
                return constants.cardMap[x[0]] !== threeKindNumber
            });
            if (onePairValue = this.onePair(remaining)) {
                return [threeKindNumber, onePairValue]
            };
        }
        return false;
    },

    straightFlush: function straightFlush(pHand) {
        return this.flush(pHand) && this.straight(pHand);
    },

    royalFlush: function royalFlush(pHand) {
        return pHand[0][0] === 'A' && this.straightFlush(pHand);
    }
};
module.exports = Win;



