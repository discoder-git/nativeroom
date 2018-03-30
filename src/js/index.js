(function() {
    var button = document.getElementById('click-me-button')
    button.addEventListener("click", (event) => {
        console.log(event.target)
    })
})()
