const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// todo를 입력할 때마다 집어넣을 리스트 생성, 비워 놓으면 기존 것을 덮어쓰는 문제가 있다.
// 그러므로 let으로 변할 수 있는 변수로 지정해두고, 기존 데이터를 넣어줘야 한다.
let toDos = [];

// localstorage에 toDos array를 추가하여 저장한다
function saveToDos(){
    // localstorage에 array를 넣을 수 없으므로 string으로 바꿔줘야 한다. JSON.stringify(array or object etc) <-> JSON.parse(array)
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    // 어떤 버튼이 눌렸는지 확인, event.target 안에 parent 확인
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "Ⅹ";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    // array에 todo input값 추가
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// // parsedToDos 활용할 function 생성
// function sayHello(item) {
//     console.log("this is turn of " + item);
// }


// localstorage에서 todos 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY);

// savedToDos가 있을 경우 array로 바꿔서 가져오기
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    // toDos array에 기존 array를 입력해서 기존 데이터 유지
    toDos = parsedToDos;
    // arrow function === (argument) => console.log("something");
    // parsedToDos에서 각각의 item에 접근하여 paintTodo 함수 실행
    parsedToDos.forEach(paintTodo);
}
