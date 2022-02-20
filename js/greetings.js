/*
/*function handleResize() {
    if (window.innerWidth <= 200) {
        document.body.style.backgroundColor = "blue";
    } else if (Window.innerWidth > 200 && Window.innerWidth <= 300) {
        document.body.style.backgroundColor = "pink";
    } else if (Window.innerWidth > 300) {
        document.body.style.backgroundColor = "orange";
    }
}
window.addEventListener("resize", handleResize);*/
/*
const body = document.body;
function wReszize() {
    const width = window.innerWidth;
    if (width > 1000) {
        body.style.backgroundColor = "pink";
    } else if (width <= 1140 && width >= 700) {
        body.style.backgroundColor = "blue";
    } else {
        body.style.backgroundColor = "orange";
    }
}
window.addEventListener("resize", wReszize);

const mom = document.body;
function wResize(){
    const garo = window.innerWidth;
    if (garo>400){
        mom.style.backgroundColor="pink";
    } else if (garo>300){
        mom.style.backgroundColor="blue";
    } else {
        mom.style.backgroundColor="orange";
    }
}

window.addEventListener("resize", wResize);

const h1 = document.querySelector(".hello h1")


function mClick() {
    h1.classList.toggle("active");
}
/*if (h1.classList.contains(activeClass)){
        h1.classList.remove(activeClass);
    } else {
        h1.classList.add(activeClass)
    }

}*/
/*
function mEnter (){
    h1.innerText="hey";
}
function mLeave (){
    h1.innerText="what";
}
function wResize(){
    document.body.style.backgroundColor="green";
}
function tCopy(){
    alert("복사하지마셈;");
}
*/


/*
function mClick(){
    if (h1.style.color="black"){
        h1.style.color="blue";
        h1.style.color="white";
    }  else{
        h1.style.color="black";
        h1.style.color="pink";
    }
};

//h1.addEventListener("mouseenter", mEnter);
//h1.addEventListener("mouseleave", mLeave);
window.addEventListener("click", mClick);
console.log(h1.style.color);
console.dir(h1.style);

//window.addEventListener("resize", wResize);
//window.addEventListener("copy", tCopy);
*/
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");




function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    paintGreetings(savedUsername);
}

