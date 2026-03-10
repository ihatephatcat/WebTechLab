function appendValue(value) {
    var display = document.getElementById("display");
    display.value = display.value + value;
}

function clearDisplay() {
    var display = document.getElementById("display");
    display.value = "";
}

function calculateResult() {
    var display = document.getElementById("display");
    var expression = display.value;

    if (expression === "") {
        return; 
    }

    try {
        var result = eval(expression); 
        
        if (result === Infinity || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (err) {
        display.value = "Error";
    }
}