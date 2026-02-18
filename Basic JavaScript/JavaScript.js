let counter = 0;
const displayNum = document.getElementById("counter");

document.getElementById("increase").addEventListener("click", function() {
    counter++;
    tickUp();
});
function tickUp() {
    displayNum.textContent = counter;
}

document.getElementById("decrease").addEventListener("click", function() {
    counter--;
    tickDown();
});
function tickDown() {
    displayNum.textContent = counter;
}


document.getElementById("loop").addEventListener("click", function() {
    let result = "";
    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }
    document.getElementById("forLoopResult").textContent = result;
});


document.getElementById("odd").addEventListener("click", function() {
    let result = "";
    for (let i = 1; i <= counter; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }
    document.getElementById("oddNumberResult").textContent = result;
});