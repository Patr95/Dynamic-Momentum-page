// DOM Elements

const time = document.getElementById("time"),
    greeting = document.getElementById("greeting"),
    name = document.getElementById("name"),
    focus = document.getElementById("focus");

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //Output Time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}`;

    //setTimeout(showTime, 1000);
    setTimeout(showTime, 1000);
}

//Add Zeros
function addZero(n) {
    return(parseInt(n, 10) < 10 ? "0" : "") + n;
}

//Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12) {
        //Morning
        document.body.style.background = "url('../img/morning.jpg') no-repeat 50% 50%";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = "Good Morning";
        document.body.style.color = "white";
    } else if(hour < 18) {
        //Afternoon
        document.body.style.background = "url('../img/afternoon.jpg') no-repeat 50% 50%";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = "Good Afternoon";
        document.body.style.color = "white";
    } else {
        //Evening
        document.body.style.background = "url('../img/night.jpg') no-repeat 50% 50%";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = "Good Evening";
        document.body.style.color = "white";
    }
}

//Get Name
function getName() {
    if(localStorage.getItem("name") === null) {
        name.textContent = "[Enter Name]";
    } else {
        name.textContent = localStorage.getItem("name");
    }
}

//Set Name
function setName(e) {
    if(e.type === "keypress") {
        //Make sure "ENTER" is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem("name", e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem("name", e.target.innerText);
    }
}

//Get Focus
function getFocus() {
    if(localStorage.getItem("focus") === null) {
        focus.textContent = "[Enter Focus]";
    } else {
        focus.textContent = localStorage.getItem("focus");
    }
}

//Set Focus
function setFocus(e) {
    if(e.type === "keypress") {
        //Make sure "ENTER" is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem("focus", e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem("focus", e.target.innerText);
    }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//Run
showTime();
setBgGreet();
getName();
getFocus();