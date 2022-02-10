var numOne = Math.floor(Math.random() * 10) + 1;
var numTwo = Math.floor(Math.random() * 10) + 1;
var correctAnswer = numOne + numTwo;

function addition() {
    document.write(numOne + " + " + numTwo);

}

function myResults() {
    var ourAnswer = document.getElementById("answer").value;
    
    if ( isNaN(ourAnswer)) {
        window.alert("Pelase enter a number");
    } else {
        if (ourAnswer == correctAnswer) {
            document.getElementById("output").innerHTML ="Correct!";
        } else {
            document.getElementById("output").innerHTML ="Incorrect!";
        }
    }
}

function reloadCard() {
    window.location.reload()
}

function newCard() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("answer").value = "";

    reloadCard();
}


