// input, button을 html에서 불러오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string만 담은 변수는 전부 대문자로 하는 경향이 있다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginBtnSubmit(event) {
    // 브라우저의 기본 동작을 막아준다. submit의 경우 새로고침을 하기 때문
    event.preventDefault();
    // loginForm에 값을 받으면 hidden class를 추가하여 css를 통해 form이 가려지도록 한다.
    // username 기억하지만 새로고침하면 사라짐
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    // loginForm.classList.add(HIDDEN_CLASSNAME);
    // // greeting 안에 hello + 받은 값을 입력한다.
    // // greeting.innerText = "Hello " + username; 아래와 같은 것이다.
    // greeting.innerText = `Hello ${username}`;
    // // greeting 안에 있는 hidden class를 제거한다.
    // greeting.classList.remove(HIDDEN_CLASSNAME);
}

// userName 등 뭔가를 저장하고 싶으면 localStorage를 이용한다.
// localStorage.setItem("username", "nico"), .getItem, .removeItem 활용
// 크롬 개발자도구 Application - Local Storage 확인

function paintGreetings(username) {
    // const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localstorage에 username이 있는지 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

// username에 따라 작동할 코드 작성
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // submit은 enter, click에 반응한다.
    loginForm.addEventListener("submit", onLoginBtnSubmit);
} else {
    paintGreetings(savedUsername);
}