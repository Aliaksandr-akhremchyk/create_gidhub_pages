let a = null;
let b = null;
let operation = null;

const resultInput =
    document.getElementById('result');
const historyDiv =
    document.getElementById('history');

const calculateButton =
    document.getElementById('calculate');

const sqrButton = 
    document.getElementById('sqr');
const addButton =
    document.getElementById('add');
const subButton =
    document.getElementById('sub');

const dotButton =
    document.getElementById('dot');
const digit1Button =
    document.getElementById('digit1');
const digit2Button =
    document.getElementById('digit2');
const digit3Button =
    document.getElementById('digit3');

calculateButton
    .addEventListener('click', function() {
        if (a !== null) {
            b = parseFloat(resultInput.value);
            historyDiv.innerHTML += b + ' = ';
            resultInput.value = calculate(operation, a, b);
            a = null;
            b = null;
            operation = null;
        }
    });

dotButton
    .addEventListener('click', function() {
        if (resultInput.value.indexOf('.') === -1) {
            if (resultInput.value === '') {
                resultInput.value += '0.';
            } else {
                resultInput.value += '.';
            }
        }
    });
digit1Button
    .addEventListener('click', function() {
        resultInput.value += 1;
    });
digit2Button
    .addEventListener('click', function() {
        resultInput.value += 2;
    });
digit3Button
    .addEventListener('click', function() {
        resultInput.value += 3;
    });

sqrButton
    .addEventListener('click', function() {
        a = parseFloat(resultInput.value);
        operation = 'sqr';
        resultInput.value = calculate(operation, a);
        historyDiv.innerHTML = a + ' * ' + a;
        a = null;
        operation = null;
    });
addButton
    .addEventListener('click', function() {
        a = parseFloat(resultInput.value);
        operation = 'add';
        resultInput.value = '';
        historyDiv.innerHTML = a + ' + ';
    });
subButton
    .addEventListener('click', function() {
        a = parseFloat(resultInput.value);
        operation = 'sub';
        resultInput.value = '';
        historyDiv.innerHTML = a + ' - ';
    });
