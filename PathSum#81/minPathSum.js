/**
 * @file  Find the minimal path sum from the
 * top left to the bottom right, by only
 * moving to the right and down in a given 80 x 80 matrix
 */

var request = require("request");
const MATRIX_URL = 'https://projecteuler.net/project/resources/p081_matrix.txt';
console.time('Time taken to calculate minimum path: ');


var path = {
    minPathSum: (matrix) => {

        if (matrix.length === 0) {
            return 0;
        }
        var resultSum = [];
        const rows = matrix.length;
        const cols = matrix[0].length;

        // Initialize 2D array with zeros
        resultSum = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

        //Initialize first row and first column
        resultSum[0][0] = matrix[0][0];

        //Fill in  first row of resultSum array
        for (let r = 1; r < rows; r++) {
            resultSum[0][r] = resultSum[0][r - 1] + matrix[0][r];
        }

        //Fill in  first column of resultSum array
        for (let c = 1; c < cols; c++) {
            resultSum[c][0] = resultSum[c - 1][0] + matrix[c][0];
        }

        //Fill in the rest by considering minimum of left element & top element
        for (let row = 1; row < rows; row++) {
            for (let column = 1; column < cols; column++) {
                // formula
                let previousMin = Math.min(resultSum[row][column - 1], resultSum[row - 1][column]);
                resultSum[row][column] = previousMin + matrix[row][column];
            }
        }
        console.log("Minimal Path Sum of given matrix is:", resultSum[rows - 1][cols - 1]);
        console.timeEnd('Time taken to calculate minimum path: ');
        return resultSum[rows - 1][cols - 1];
    },
    getData: function () {
        // Get the 2Dimensional data from URL
        request(MATRIX_URL, (error, response, body) => {
            if (error) throw new Error(error);
            if (body) {
                matrix = body.trim().split("\n").map((row) => {
                    return row.split(",").map((col) => parseInt(col))
                });
                path.minPathSum.call(null, matrix);
            }
        });
    }
};
path.getData();
module.exports = path;
