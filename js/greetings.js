// input, button을 html에서 불러오기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string만 담은 변수는 전부 대문자로 하는 경향이 있다.
const HIDDEN_CLASSNAME = "hidden";

function onLoginBtnSubmit(event) {
    // 브라우저의 기본 동작을 막아준다. submit의 경우 새로고침을 하기 때문
    event.preventDefault();
    //username을 input값의 value로 받아준다.
    const username = loginInput.value;
    // loginForm에 값을 받으면 hidden class를 추가하여 css를 통해 form이 가려지도록 한다.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // greeting 안에 hello + 받은 값을 입력한다.
    // greeting.innerText = "Hello " + username; 아래와 같은 것이다.
    greeting.innerText = `Hello ${username}`;
    // greeting 안에 있는 hidden class를 제거한다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// submit은 enter, click에 반응한다.
loginForm.addEventListener("submit", onLoginBtnSubmit);

