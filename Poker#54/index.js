/**
 * @file  Calculate how many hands does Player 1 win?
 */

const constants = require("./constants");
const Win = require("./pokerWinningConditions");
var request = require("request");
var winCount = 0;
const Poker_URL = 'https://projecteuler.net/project/resources/p054_poker.txt';

console.time('Time taken to run poker hands:');

/**
 * Determines and return boolean if player 1 wins each game.
 * @param p1 : player1  array of cards
 * @param p2 : player2  array of cards
 * @returns {boolean}
 */
var player1winCount = function (p1, p2) {
    let p1Value, p2Value;

    // Check if player 1 wins Royal Flush
    if (Win.royalFlush(p1)) return true;
    if (Win.royalFlush(p2)) return false;


    // Check if player 1 wins Straight Flush
    if (Win.straightFlush(p1)){
        if (Win.straightFlush(p2)){ return Win.highCard(p1) > Win.highCard(p2);}
        return true;
    }
    if (Win.straightFlush(p2)) return false;

    // Check if player 1 FourOfAKind
    if (p1Value = Win.fourOfAKind(p1)) {
        if(p2Value = Win.fourOfAKind(p2)) { return p1Value > p2Value; }
        return true;
    }
    if (Win.fourOfAKind(p2)) return false;

    // Check if player 1 wins Full House
    if (p1Value = Win.fullHouse(p1)) {
        if(p2Value = Win.fullHouse(p2)) {
            return p1Value[0] > p2Value[0] || p1Value[1] > p2Value[1];
        }
        return true;
    }
    if (Win.fullHouse(p2)) return false;


    // Check if player 1 wins  Flush
    if (Win.flush(p1)) {
        if(Win.flush(p2)) {
            return Win.highCard(p1) > Win.highCard(p2);
        }
        return true;
    }
    if (Win.flush(p2)) return false;

    // Check if player 1 wins Straight
    if (Win.straight(p1)) {
        if (Win.straight(p2)) {
            return Win.highCard(p1) > Win.highCard(p2);
        }
        return true;
    }
    if (Win.straight(p2)) return false;

    // Check if player 1 wins ThreeOfAKind
    if (p1Value = Win.threeOfAKind(p1)) {
        if (p2Value = Win.threeOfAKind(p2)) {
            return p1Value > p2Value;
        }
        return true;
    }
    if (Win.threeOfAKind(p2)) return false;

    // Check if player 1 wins Two Pair
    if (p1Value = Win.twoPair(p1)) {
        if (p2Value = Win.twoPair(p2)) {
            return p1Value[0] > p2Value[0] || p1Value[1] > p2Value[1];
        }
        return true;
    }
    if (Win.twoPair(p2)) return false;

    // Check if player 1 wins OnePair
    if (p1Value = Win.onePair(p1)) {
        if (p2Value = Win.onePair(p2)) {
            return p1Value > p2Value;
        }
        return true;
    }
    if (Win.onePair(p2)) return false;

    // If none of above conditions satisfy, Have to check for highestCard
    return Win.highCard(p1) > Win.highCard(p2) ? true: false;
};

/**
 * splits array and assign cards to player 1 & player 2.
 * If player 1 wins then increment the winCount
 * @param line : Array of cards
 */
function eachGame(line) {
    const cards = line.split(' ');
    const player1 = Win.sortCards(cards.slice(0, 5));
    const player2 = Win.sortCards(cards.slice(5));
    if (player1winCount(player1, player2)) {
        winCount++;
    }
}

request(Poker_URL, (error, response, body) => {
    if (error) throw new Error(error);
    if (body) {
        body.trim().split("\n").forEach((row)=> {
            eachGame(row)
        });
        console.log(`Player 1 win count : ${winCount}`);
        console.timeEnd('Time taken to run poker hands:');
    }
});