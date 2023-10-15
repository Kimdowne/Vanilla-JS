const login = document.getElementById("login");
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginInputText = loginForm.querySelector("input:first-child");

const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginSubmit(event) {
  event.preventDefault();
  login.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintUI(username);
}

function paintUI(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hi! ${username}`;

  clock.classList.remove(HIDDEN_CLASSNAME);
  list.classList.remove(HIDDEN_CLASSNAME);
  quete.classList.remove(HIDDEN_CLASSNAME);
  weather.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  login.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);

  clock.classList.add(HIDDEN_CLASSNAME);
  list.classList.add(HIDDEN_CLASSNAME);
  quete.classList.add(HIDDEN_CLASSNAME);
  weather.classList.add(HIDDEN_CLASSNAME);
} else paintUI(savedUsername);

loginInputText.addEventListener("click", () => {
  loginInputText.placeholder = "";
});
