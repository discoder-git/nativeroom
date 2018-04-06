(function() {
    var button = document.getElementById('click-me-button')

    var boo = function boo() {
        console.log('boo inside foo')
    }

    var foo = function foo(payload) {
        payload()
    }

    var obj = {
        testField: 2317
    }

    button.addEventListener("click", (event) => {
        foo(boo)
    })

})()
