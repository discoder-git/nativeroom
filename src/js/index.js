(function() {
    var button = document.getElementById('click-me-button')

    var foo = function foo (msg) {
        console.log(msg)
    }

    foo.testProp = 'test prop'

    button.addEventListener("click", (event) => {
        foo('you')
        console.log(foo.__proto__.__proto__)
    })

})()
