var $txtNumber = document.querySelector('input');
var $btn = document.querySelectorAll('button');
var arrNumbers = [];
var arr1 = [];
var operador;

for (var i = 0; i < $btn.length; i++) {
    $btn[i].addEventListener('click', function (e) {
        if (e.target.value != '=' && e.target.value != 'C') {
            arrNumbers += e.target.value;
            $txtNumber.value = arrNumbers;
        } else if (e.target.value === '=') {
            result();
        } else {
            $txtNumber.value = "";
            arrNumbers = "";
        }
    });
}

function sub(arr1) {
    var r = parseInt(arr1[0]);
    for (var a = 1; a < arr1.length; a++) {
        r -= parseInt(arr1[a]);
    }
    return r;
}

function add(arr1) {
    var r = 0;
    for (var a = 0; a < arr1.length; a++) {
        r += parseInt(arr1[a]);
    }
    return r;
}

function result() {
    var elements = arrNumbers.split(/([+\-*\/])/);
    var result = parseInt(elements[0]);
    for (var i = 1; i < elements.length; i += 2) {
        var e = elements[i];
        var num = parseInt(elements[i + 1]);
        if (e === '+') {
            result = add([result, num]);
        } else if (e === '-') {
            result = sub([result, num]);
        } else if (e === '*') {
            result *= num;
        } else if (e === '/') {
            result /= num;
        }
    }
    $txtNumber.value = result;
    arrNumbers = result.toString();
}