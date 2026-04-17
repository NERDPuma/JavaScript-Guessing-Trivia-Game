//Luis K. Gonzalez 5/12/2022

//use strict
"use strict";

//window.alert
alert("Welcome to the JavaScript Guessing/Trivia Game!")


//let, window.prompt
let user = prompt("What's your name?");

//if..else, ||, ==
if (user == null || user == "" ) {
    document.getElementById("user").textContent = "Hello!";
    console.log("Hello!")
    } else {

    //document.getElementById("").textContent
    document.getElementById("user").textContent = "Hello " + user + "!";
    console.log("Hello", user);
}

//This hides all the questions until you press the start button
document.getElementById("hide").style.display = "none";
document.getElementById("hide2").style.display = "none";


//function that starts the game
function start() {
    document.getElementById("fun").style.display = "none";
    document.getElementById("thanks").style.display = "none";
    document.getElementById("hide").style.display = "block";
    document.getElementById("hide2").style.display = "block";

    //const, for, document.querySelectorAll, <, ++
    const qlist = document.querySelectorAll(".color");
    for (let i = 0; i < qlist.length; i++) {
        qlist[i].style.backgroundColor = "white";
        qlist[i].style.color = "blue";
    }
    console.log("You have started the game!");
}
    //once start button is clicked, the game starts
    document.getElementById("start").addEventListener("click", start);

//function for question 1
function q1() {

    //document.getElementById().value
    let question1 = document.getElementById("q1").value;

    //switch
    switch(question1) {
        case "4": document.getElementById("1").textContent = "Try Again!"; console.log("Wrong"); break;
    }
}
    //when 4 is clicked it shows the user "Try Again"
    document.getElementById("q1").addEventListener("click", q1);

//another function for question 1
function quest1() {
    let quest1 = document.getElementById("que1").value;
    switch(quest1) {
        case "8": document.getElementById("1").textContent = "Try Again!"; console.log("Wrong"); break;
    }
}
    //when 8 is clicked it shows the user "Try again"
    document.getElementById("que1").addEventListener("click", quest1);

//another function for question 1
function que1() {
    let que1 = document.getElementById("1q").value;
    switch(que1) {
        case "6": document.getElementById("1").textContent = "Good Job!"; console.log("Correct"); break;
    }
}
    //when 6 is clicked it tells the user "good job"
    document.getElementById("1q").addEventListener("click", que1);

//function for question 2
function q2() {
    let question2 = document.getElementById("q2").value;
    let q2 = document.getElementById("q2").value

    //document.getElementById().value
    document.getElementById("q2").value = "Hint: first symbol is %";

    //===, %, **, *, /, +, -, &&
    if (question2 === "%, **, *, /, +, -" && q2 === "%, **, *, /, +, -") {
        document.getElementById("q2").value = "You are correct!";
        console.log("Correct");
    } else if (question2 === "" || question2 === null && q2 === "" || q2 === null) {
        document.getElementById("q2").value = "Try Again!";
        console.log("Wrong");
    } else if (question2 === "% ** * / + -" && q2 === "% ** * / + -") {
        document.getElementById("q2").value = "Try Again!";
        console.log("Wrong");
    } 
}   
    //when the confirm button is clicked it shows the user the result of what they entered
    document.getElementById("confirm").addEventListener("click", q2);

    //when the hint button is clicked, it shows a hint for the user
    document.getElementById("hint").addEventListener("click", q2);

//function for question 3    
function q3() {
    let question3 = document.getElementById("q3").value;

    //switch
    switch(question3) {
        case "Yes": document.getElementById("3").textContent = "You are correct!"; document.getElementById("3").style.color = "red"; 
        document.getElementById("3").style.backgroundColor = "black"; console.log("Correct"); break;
    }
}
    //when Yes is clicked it changes the styling of the paragraph with id of "3"
    document.getElementById("q3").addEventListener("click", q3);

//another function for question 3
function que3() {
    let que3 = document.getElementById("3q").value;
    switch(que3) {
        case "No": document.getElementById("3").textContent = "Of course it can!"; document.getElementById("3").style.backgroundColor = "grey"; 
        document.getElementById("3").style.color = "blue"; console.log("Wrong"); break;
    }
}
    //when No is clicked it changes the styling of the same paragraph with id of "3"
    document.getElementById("3q").addEventListener("click", que3);

//function for question 4
function q4() {
    let question4 = document.getElementById("q4").value;
    var image = document.getElementById("js");
    switch(question4) {
        case "Yes": document.getElementById("4").textContent = "Nice Job!"; console.log("Correct"); 
        image.src = "thumbsup.jpg"; break; 
    }
}
    //when Yes is clicked it tells the user "good job" and shows an image of a thumbs up
    document.getElementById("q4").addEventListener("click", q4);

//another function for question 4
function que4() {
    let que4 = document.getElementById("4q").value;
    var image = document.getElementById("js");
    switch(que4) {
        case "No": document.getElementById("4").textContent = "Try Again!"; console.log("Wrong");
        image.src = "thumbsdown.jpg"; break;
    }
}
    //when No is clicked it tells the user "try again" and shows a thumbs down image
    document.getElementById("4q").addEventListener("click", que4);

//function for question 5
function q5() {
    let question5 = document.getElementById("q5").value;

    //while
    while (question5 === "1010") {
        document.getElementById("q5").value = "You are correct!";
        console.log("Correct");
        break;
    }
    while (question5 === "" || question5 === null) {
        document.getElementById("q5").value = "Try Again!";
        console.log("Wrong");
        break;
    }
    while (question5 === "20") {
        document.getElementById("q5").value = "Try Again!";
        console.log("Wrong");
        break;
    }
}
    //when the add button is clicked it checks what the user entered
    document.getElementById("+").addEventListener("click", q5);

//function for question 6
function q6() {
    let question6 = document.getElementById("op1").value;

    //>, <=, <, >=
    if (question6 === ">") {
        document.getElementById("q6").textContent = "Try Again!";
        console.log("Wrong");
    } else if (question6 === "<=") {
        document.getElementById("q6").textContent = "Try Again!";
        console.log("Wrong");
    } else if (question6 === "<") {
        document.getElementById("q6").textContent = "You are correct!";
        console.log("Correct");
    } else if (question6 === ">=") {
        document.getElementById("q6").textContent = "Try Again!";
        console.log("Wrong");
    }
}
    //when an option is selected by the user, it says if it's right or wrong
    document.getElementById("op1").addEventListener("click", q6);

//function for question 7
function q7() {
    let question7 = document.getElementById("op2").value;

    //+=, !=, ==, !==
    if (question7 === "+=") {
        document.getElementById("q7").textContent = "Try Again!";
        console.log("Wrong");
    } else if (question7 === "!=") {
        document.getElementById("q7").textContent = "Try Again!";
        console.log("Wrong");
    } else if (question7 === "==") {
        document.getElementById("q7").textContent = "You are correct!";
        console.log("Correct");
    } else if (question7 === "!==") {
        document.getElementById("q7").textContent = "Try Again!";
        console.log("Wrong");
    } else if (question7 === "===") {
        document.getElementById("q7").textContent = "Try Again!";
        console.log("Wrong");
    }
}
    //when an option is selected by the user, it says if it's right or wrong
    document.getElementById("op2").addEventListener("click", q7);

//function for question 8
function q8() {  
    let question8 = document.getElementById("q8").value;
    if (question8 === "JavaScript, Java, HTML, Python") {
        document.getElementById("8").textContent = "You are correct!";
        console.log("Correct");
    } else if (question8 === "JavaScript, Java, Python, HTML, Python") {
        document.getElementById("8").textContent = "You are correct!";
        console.log("Correct");
    } else if (question8 === "CSS, JavaScript, Java, Python, HTML") {
        document.getElementById("8").textContent = "Try Again!";
        console.log("Wrong");
    } else if (question8 === "JavaScript, Java, HTML, CSS, Python") {
        document.getElementById("8").textContent = "Try Again!";
        console.log("Wrong");
    } else if (question8 === "" || question8 === null) {
        document.getElementById("8").textContent = "Try Again!";
        console.log("Wrong");
    }
}
    //when the check button is clicked it checks the answer the user inputed
    document.getElementById("check").addEventListener("click", q8);

//another function for question 8
function que8() {

    //array
    let arr = ["JavaScript", "Java", "Python", "HTML", "CSS"];
    arr.pop();
    arr.push("Python");
    document.getElementById("arr").textContent = arr;
}
    //when the help is clicked, it give the user an answer/hint
    document.getElementById("help").addEventListener("click", que8);

//function for question 9
function q9() {
    let question9 = document.getElementById("q9").value;
    var image = document.getElementById("thanks");
    if (question9 === "JavaScript") {
        document.getElementById("9").textContent = "Correct!";
        document.getElementById("thanks").style.display = "block";
        image.src = "thanks.png";
        console.log("Correct");
    } else if (question9 === "HTML") {
        document.getElementById("9").textContent = "Try Again!";
        console.log("Wrong");
    } else if (question9 === "CSS") {
        document.getElementById("9").textContent = "Try Again!";
        console.log("Wrong");
    } else if (question9 === "" || question9 === null) {
        document.getElementById("9").textContent = "Try Again!";
        console.log("Wrong");
    }
}
    //when the accept button is clicked, it checks the user's answer and if it's correct displays the image
    document.getElementById("accept").addEventListener("click", q9);
