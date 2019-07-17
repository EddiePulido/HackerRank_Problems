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

// Complete the staircase function below.
function staircase(n) {
    let count = 1;

    while (n >= count) {
        let str = "";
        for (let i = n - count; i > 0; i--) {
            str += " ";
        }
        for (let j = 0; j < count; j++) {
            str += "#";
        }
        count++;
        console.log(str);
    }

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
