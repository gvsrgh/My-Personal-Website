function calculator(a, b, operator) {
    return operator(a, b);
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function mod(a, b) {
    return a % b;
}

document.querySelector('.add').addEventListener("click", function () {
    var fn = Number(document.querySelector("#firstNumber").value);
    var sn = Number(document.querySelector("#secondNumber").value);
    document.querySelector(".res").innerHTML = calculator(fn, sn, add);
});

document.querySelector('.sub').addEventListener("click", function () {
    var fn = Number(document.querySelector("#firstNumber").value);
    var sn = Number(document.querySelector("#secondNumber").value);
    document.querySelector(".res").innerHTML = calculator(fn, sn, sub);
});

document.querySelector('.mul').addEventListener("click", function () {
    var fn = Number(document.querySelector("#firstNumber").value);
    var sn = Number(document.querySelector("#secondNumber").value);
    document.querySelector(".res").innerHTML = calculator(fn, sn, mul);
});

document.querySelector('.div').addEventListener("click", function () {
    var fn = Number(document.querySelector("#firstNumber").value);
    var sn = Number(document.querySelector("#secondNumber").value);
    document.querySelector(".res").innerHTML = calculator(fn, sn, div);
});

document.querySelector('.mod').addEventListener("click", function () {
    var fn = Number(document.querySelector("#firstNumber").value);
    var sn = Number(document.querySelector("#secondNumber").value);
    document.querySelector(".res").innerHTML = calculator(fn, sn, mod);
});