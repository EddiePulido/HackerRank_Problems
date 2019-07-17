'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {

    let min = 0;
    let max = 0;

    let sum = 0;
    let min_sum = 0;
    let max_sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[max]) {
            max = i;
        } else if (arr[i] < arr[min]) {
            min = i;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    min_sum = sum - arr[max];
    max_sum = sum - arr[min];


    console.log(min_sum, max_sum);

}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
