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