'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let result =  0;
    let right = 0;
    let left = 0;

    let i = 0;
    let j = arr.length - 1;

    while(i < arr.length){
        left += arr[i][j];
        right += arr[i][i];
        i++;
        j--;
    }

    return Math.abs(right-left);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}

const arr = [
    [1,2,3],
    [4,5,6],
    [9,8,9]
]

console.log(diagonalDifference(arr));