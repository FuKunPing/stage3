'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var a = 1,
    b = 2,
    c = 3;


var obj = {
    name: 'jim',
    say: function say() {
        console.log(this.name);
    },
    getBirth: function getBirth() {
        var _this = this;

        return function () {
            return _this.name + '\u7684\u751F\u65E5\u662F\u4ECA\u5929';
        };
    }
};

var p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('1秒结束');
    }, 1000);
});
p.then(function (data) {
    console.log(data);
});

var Stu = function () {
    function Stu(id, name) {
        _classCallCheck(this, Stu);

        this.id = id;
        this.name = name;
    }

    _createClass(Stu, [{
        key: 'say',
        value: function say() {
            console.log(this.name);
        }
    }]);

    return Stu;
}();