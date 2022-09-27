'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readline() {
    return inputString[currentLine++];
}

// Make a Snippet for the code above this and then write your logic in main();

function main() {
    // Declare and read the number of test cases.
    var T;
    T = parseInt(readline());

    // Loop over the number of test cases.
    for (var test_no = 1; test_no <= T; test_no++) {
        process.stdout.write('Case #' + test_no + ': ');
        solve();
    }
}

function solve() {
    var N, M;
    [N, M] = readline().split(' ').map(x => parseInt(x));

    var C = [];
    C = readline().split(' ').map(x => parseInt(x));

    var sum = 0;
    for (var i = 0; i < N; i++) {
        sum += C[i];
    }

    var result = sum % M;

    process.stdout.write(result + '\n');
}
