/* jshint esversion: 8 */

function clear() {

}

function clearAll() {
    document.getElementById('srf-input-main').value = '';
    document.getElementById('input-memory').value = '';
}

function mainNumberInput(event) {
    let e = event || window.event;
    let key = e.keyCode || e.which;
    console.log("key= " + key);
    mainTemp = document.getElementById("textarea-input-main").value;

    //check if decimal point exists
    if (mainTemp.includes(".") && key == 46) {
        e.preventDefault();
        //add key entered
    } else if (key == 43) {
        e.preventDefault();
        let newLine = document.getElementById('textarea-input-main');
        newLine.value = newLine.value + "\n" + "+ ";
        operatorCalculation('+');
        //subtract key entered
    } else if (key == 45) {
        e.preventDefault();
        //multiply key entered
    } else if (key == 42) {
        e.preventDefault();
        //divide key entered
    } else if (key == 47) {
        e.preventDefault();
        //only allow number entry
    } else if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
        //numbers on top row
        key >= 48 && key <= 57 ||
        //decimal point and period
        key == 110 || key == 190 ||
        //backspace and tab
        key == 8 || key == 9 ||
        //home and end
        key == 35 || key == 36 ||
        //left and right arrows
        key == 37 || key == 39 ||
        //del
        key == 46) {
        //input is valid
        //get string of the character code
        convertCharCode = String.fromCharCode(key);
        //get inputted value
        mainTemp = mainTemp + convertCharCode;
    } else {
        //input is INVALID
        e.returnValue = false;
        if (e.preventDefault) e.preventDefault();
    }
}

function memoryNumberInput(event) {
    let e = event || window.event;
    let key = e.keyCode || e.which;

    memoryTemp = document.getElementById("input-memory").value;

    if (memoryTemp.includes(".") && key == 110 || key == 190) {
        e.preventDefault();
    } else if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
        //numbers on top row
        key >= 48 && key <= 57 ||
        //number pad
        key >= 96 && key <= 105 ||
        //decimal point and period
        key == 110 || key == 190 ||
        //backspace and tab
        key == 8 || key == 9 ||
        //home and end
        key == 35 || key == 36 ||
        //left and right arrows
        key == 37 || key == 39 ||
        //del
        key == 46) {
        //input is VALID
        console.log("memory key= " + key);
    } else {
        //input is INVALID
        e.returnValue = false;
        if (e.preventDefault) e.preventDefault();
    }
}

function operatorCalculation(evt) {
    let operator = evt;
    switch (operator) {
        case '+':
            console.log('add pressed');
            break;
        case '-':
            console.log('subtract pressed');
            break;
        case '*':
            console.log('multiply pressed');
            break;
        case '/':
            console.log('divide pressed');
            break;
    }
}
