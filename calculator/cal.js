function add(value) {
    document.getElementById('display').value += value;
}
function cal() {
    let expression = document.getElementById('display').value;
    let result = eval(expression);
    document.getElementById('display').value = result;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}

