// NUMBER 1: Find the next integral perfect square after the one passed as a parameter. If the parameter is itself not a perfect square, then return - 1. Assume the parameter is positive.
function findNextSquare(sq) {
    if (Math.sqrt(sq) === Math.floor(Math.sqrt(sq))) {
        var squaredRoot = Math.sqrt(sq) + 1;
        squaredRoot = squaredRoot * squaredRoot;
        return squaredRoot;
    }
    else {
        return -1;
    }
}
// OR can do:
function findNextSquare(sq) {
    var root = Math.sqrt(sq);
    return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}
// ------------------ 124,839 -------------------------------- //
// NUMBER 2: Your task is to determine whether the numbers are in ascending order.
function inAscOrder(arr) {
    let randomArr = arr.concat();
    randomArr.sort(function (a, b) {
        return a - b;
    });

    if (arr.join() == randomArr.join()) {
        return true;
    }
    else { return false; }
}

// NUMBER 3: In this Kata, you will be given a string with brackets and an index of an opening bracket and your task will be to return the index of the matching closing bracket. An opening brace will always have a closing brace. Return -1 if there is no answer.
function solve(str, idx) {
    if (str[idx] !== '(') {
        return -1;
    }
    var count = 1;
    idx++;
    while (count > 0) {
        if (str[idx] == '(') {
            count += 1;
        }
        else if (str[idx] == ')') {
            count -= 1;
        }
        idx++;
    }
    return idx - 1;
}

// NUMBER 4: Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder {
    findSmallestInt(arr) {
        let s = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (s > arr[i]) {
                s = arr[i];
            }
        }
        return s;
    }
}
// ------------------ 110,675 -------------------------------- //

//NUMBER 5: Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
function solution(nums) {
    if (nums == null || nums.length == 0) {
        return [];
    }
    nums.sort(function (a, b) {
        return a - b;
    });
    return nums;
}
// NUMBER 6: Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
    var arr = [], dupArr = [];
    for (var i = 0; i < text.length; i++) {
        var t = text[i].toLowerCase();
        if (arr.indexOf(t) < 0) arr.push(t);
        else if (dupArr.indexOf(t) < 0) dupArr.push(t);
    }
    return dupArr.length;
}
//NUMBER 7: Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0);
}
// NUMBER 8: You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'. You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So: 'C.....m' returns 'Escaped!' < --more than three characters between. 'C...m' returns 'Caught!'
function catMouse(x) {
    var myArray = x.split('');
    var count = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] == '.') {
            count += 1;
        }
    }
    if (count > 3) {
        return "Escaped!"
    }
    else { return 'Caught!' }
}
//OR can do:
function catMouse(x) {
    return x.length <= 5 ? 'Caught!' : 'Escaped!';
}
// Number 9a Convert a string to an array
function stringToArray(string) {
    return string.split(" ");
}
// NUMBER 9 write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'. The string should start with a 1. Ex. A string with size 6 should return :'101010'
function stringy(size) {
    var myString = '1';
    for (let i = 1; i < size; i++) {
        if (i % 2 === 0) {
            myString = myString + '1';
        }
        else {
            myString = myString + '0';
        }
    }
    return myString;
}
// NUMBER 10: Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (= ignore duplicates).
function minValue(values) {
    let unique_array = [];
    for (let i = 0; i < values.length; i++) {
        if (unique_array.indexOf(values[i]) == -1) {
            unique_array.push(values[i]);
        }
    }
    unique_array = unique_array.sort().join('');
    return +(unique_array);
}
// ------------------ 84,837 -------------------------------- //

// NUMBER 11: (7 kyu) Find The Maximum Sum That Can Be Made With Three Numbers In The Array Without Including Duplicate Numbers.
function maxTriSum(numbers) {
    let uniqueArray = [];
    for (let i = 0; i < numbers.length; i++) {
        if (uniqueArray.indexOf(numbers[i]) == -1) {
            uniqueArray.push(numbers[i]);
        }
        uniqueArray = uniqueArray.sort(function (a, b) { return b - a });
        return (uniqueArray[0] + uniqueArray[1] + uniqueArray[2]);
    }
}
// --------------- Leaderboard Position: #82,874 ---------- //

// NUMBER 12: Find The maximum difference between the successive elements in its sorted form.
function maxGap(numbers) {
    let myNewArr = [];
    for (let i = 0; i < numbers.length; i++) {
        myNewArr.push(numbers[i]);
    }
    myNewArr = myNewArr.sort(function (a, b) { return b - a });
    console.log(myNewArr);
    var mySpacearr = [];
    for (let i = 0; i < myNewArr.length - 1; i++) {
        mySpacearr.push(myNewArr[i] - myNewArr[i + 1]);
    }
    mySpacearr.sort(function (a, b) { return b - a });
    return mySpacearr[0];
}
// --------------- Leaderboard Position: #80,760 ---------- //
// NUMBER 13: In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers ending in 5. This includes negative numbers. The start and the end number are both inclusive!

function dontGiveMeFive(start, end) {
    let notFive = [];
    for (let i = start; i <= end; i++) {
        if (i === 0) {
            notFive.push(i);
        }
        else if (i < 1) {
            let newI = (i * -10) / 10;
            if (newI % 10 !== 5) {
                notFive.push(i);
            }
        }
        else if (i % 10 !== 5) {
            notFive.push(i);
        }
    }
    return notFive.length;
}