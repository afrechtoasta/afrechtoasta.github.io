let counter = 0;
const displayNum = document.getElementById("counter");

document.getElementById("increase").addEventListener("click", function() {
    counter++;
    tickUp();
});
function tickUp() {
    displayNum.textContent = counter;
};

document.getElementById("decrease").addEventListener("click", function() {
    counter--;
    tickDown();
});
function tickDown() {
    displayNum.textContent = counter;
};

function runForLoop(){
    let result = "";
    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }

    document.getElementById("forLoopResult").textContent = result;
};

function showOddNumbercss(){

   let result = "";
    for (let i = 1; i <= counter; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }
    document.getElementById("oddNumberResult").textContent = result;

};

function addMultiplesToArray() {

    let a = [];
    if (counter >= 5) {
        for (let i = 5; i <= counter; i += 5) {
            a.unshift(i); 
        }
    }
    console.log(a); 
};

function printCarObject() {
    const type = document.getElementById("carType").value;
    const mpg = document.getElementById("carMPG").value;
    const color = document.getElementById("carColor").value;

    const c = {
        type: type,
        mpg: mpg,
        color: color
    }
    console.log(c);
};

function loadCar(d) {
    const type = document.getElementById("carType").value = d.cType;
    const mpg = document.getElementById("carMPG").value = d.cMPG;
    const color = document.getElementById("carColor").value = d.cColor;
};
document.getElementById("one").addEventListener("click", function() {
    loadCar(carObject1);
});
document.getElementById("two").addEventListener("click", function() {
    loadCar(carObject2);
});
document.getElementById("three").addEventListener("click", function() {
    loadCar(carObject3);
});


const story = document.getElementById("styleParagraph");
document.getElementById("red").addEventListener("click", function() {
    story.style.color = "red";
});

document.getElementById("green").addEventListener("click", function() {
    story.style.color = "green";
});

document.getElementById("blue").addEventListener("click", function() {
    story.style.color = "blue";
});