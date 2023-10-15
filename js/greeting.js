const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginInputText = loginForm.querySelector("input:first-child");

const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hi! ${username}`;
}

function handlePlaceholder() {
  loginInputText.placeholder = "";
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else paintGreeting(savedUsername);

loginInputText.addEventListener("click", handlePlaceholder);

console.log(loginInputText);
