const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용, 중요한 정보를 담은게 아니라서 대문자로 작성. 반복적으로 사용되는 stirng
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 기본동작을 막음
  loginForm.classList.add(HIDDEN_CLASSNAME); //form과 greeting에 hidden이라는 class추가
  // const username = loginInput.value; //loginInput의 값을 변수에 저장
  localStorage.setItem(USERNAME_KEY, username); //("key", "value")
  // greeting.innerText = `Hello ${username}`; //비어져있는 h1에 텍스트를 넣어줌. string과 변수를 합쳐줌. 변수를 string안에 포함시키는 방법. `${}`를 사용하여 string안에 변수값을 넣어줌
  // greeting.classList.remove(HIDDEN_CLASSNAME); // h1에서 hidden이라는 class삭제
  paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username) {
  // const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){ //local storage에 유저 정보가 없을 때, 
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}


