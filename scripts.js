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