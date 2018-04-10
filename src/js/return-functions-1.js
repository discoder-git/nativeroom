/******************************************************/

var foo = function foo () {
    console.log('1')
    return function () {
        console.log('2')
        return function () {
            console.log('3')
        }
    }
}

/******************************************************/

var setup = function () {
    var count = 0;
    return function () {
        return count += 1;
    }
}

/******************************************************/
