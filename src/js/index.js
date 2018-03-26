(function() {

    var obj = {};
    var ObjectWithoutProto = Object.create(null);

    function func () {
        console.log("Была вызвана функция 'func'");
        return true;
    }

    var user = {
        role: "user"
    };
    var userIvan = {
        login: "userivan"
    }
    userIvan.__proto__ = user;


    var arr = [1,2,3];


    console.log( Array.prototype )
})()
