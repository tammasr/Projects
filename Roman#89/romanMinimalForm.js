/**
 * @file  Find the number of characters saved by writing each of
 * the Roman Numeral in their minimal form.
 */


console.time('Time taken to calculate roman minimal solution: ');
const ROMAN_NUMBER_URL = 'https://projecteuler.net/project/resources/p089_roman.txt';
var request = require("request");

var roman = {
    currentSum: 0,
    improvedSum: 0,


    /**
     * returns improved pattern by going through these
     * substraction rules and substituiting them.
     */

    getOptimalRomanNumeral: (romanNum) => {
        let patterns = new Map();
        var improvedPattern = romanNum;
        patterns.set("VIIII", "IX");
        patterns.set("IIII", "IV");
        patterns.set("LXXXX", "XC");
        patterns.set("XXXX", "XL");
        patterns.set("DCCCC", "CM");
        patterns.set("CCCC", "CD");

        [...patterns.keys()].forEach((key) => {
            let regex = new RegExp(key);
            improvedPattern = improvedPattern.replace(regex, patterns.get(key))
        });
        return improvedPattern;
    }
};

// Get the Roman Numeral data from URL
request(ROMAN_NUMBER_URL, (error, response, body) => {
    if (error) throw new Error(error);
    if (body) {
        body.split('\n').forEach((line) => {
            roman.currentSum += line.length;
            roman.improvedSum += roman.getOptimalRomanNumeral(line).length;
        });
        console.log('Total No.of characters (Original):', roman.currentSum);
        console.log('Total No.of characters (Improved):', roman.improvedSum);
        console.log('Difference (Original - Improved) :', roman.currentSum - roman.improvedSum);

        console.timeEnd('Time taken to calculate roman minimal solution: ');
    }
});

module.exports = roman;