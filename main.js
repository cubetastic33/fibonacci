//MDC Web
const topAppBar = new mdc.topAppBar.MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
const f0 = new mdc.textField.MDCTextField(document.querySelector('#f0'));
const f1 = new mdc.textField.MDCTextField(document.querySelector('#f1'));
const numberOfValues = new mdc.textField.MDCTextField(document.querySelector('#numberOfValues'));

document.getElementById('fibonacciForm').addEventListener('submit', (e) => {
    e.preventDefault();
    var fibonacciSeries = fibonacci(parseInt(f0.value), parseInt(f1.value), parseInt(numberOfValues.value));
    var result = '';
    fibonacciSeries.forEach((fibonacciNumber) => {
        result += fibonacciNumber + ', ';
    });
    document.getElementById('result').innerHTML = result.substr(0, result.length - 2);
});

//Fibonacci Function
function fibonacci(F0, F1, N) {
    var fibonacciSeries = [F0, F1];
    for (var i = 2; i < N; i++) {
        fibonacciSeries.push(F0 + F1);
        F0 = F1;
        F1 = fibonacciSeries[i];
    }
    return fibonacciSeries;
}
