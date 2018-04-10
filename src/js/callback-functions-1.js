/*********************

ЗАДАЧА:
    1. Пройтись по массиву
    2. Если эл-нт массива === числу - преобразовать в строку и записать в новый массив
    3. Использовать callback функцию

*********************/

var arr = ["23", 17, true, false, undefined, 'String string']

var findNodes = function findNodes (callback) {
    var results = []
    arr.forEach(function(el) {
        if (typeof el == 'number') {
            var string = callback(el)
            results.push(string)
        }
    })
    return results
}

var numToString = function numToString (num) {
    return num.toString()
}

var newArr = findNodes( numToString )
console.log( newArr )
