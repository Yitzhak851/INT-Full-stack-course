function init() {

}

function sumOfDigits(n) {
    if (n < 10) return n;
    let x = n % 10;
    n = (n - x) / 10;
    return x + sumOfDigits(n);
}

function max(a, b) {
    if (a > b)
        return a;
    return b;
}

function maxDigit(n) {
    if (n < 10)
        return n;
    let lastDigit = n % 10;
    return max(maxDigit(qutient(n, 10)), lastDigit);
}

alert(maxDigit(1234567));
