// 코드 연습용

// alert("hi");

// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// // Get Item from Array
// console.log(daysOfWeek[5]);

// // Add one more day to the array
// daysOfWeek.push("sun");

// // Objects 활용법
// const playerName = "nico";
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = "little bit";

// // 이런식으로 간단하게 만드는 방법이 없을까?
// player.name
// player.points
// player.handsome
// player.fat

// // Objects는 중괄호로 시작하고, 안에서 = 대신 : 을 사용한다.
// const player = {
//     name: "nico",
//     points: 10,
//     fat: true,
// };
// // console.log 대신에 Objects.xx로 접근이 가능하다.
// console.log(player.name); // nico
// player.name // "nico"

// // Objects 값 변경
// player.fat = false;

// // Objects에 새로운 값 추가
// player.lastName = "potato";
// player.points = player.points + 15;
// console.log(player);

// // Functions part One
// // Function의 기본 사용법
// function sayHello(){
//     console.log("Hello!");
// }

// sayHello();
// sayHello();
// sayHello();
// sayHello(); // Hello! 4번 출력

// // Function 활용
// function sayHello(nameOfPerson, age){
//     console.log("Hello! my name is " + nameOfPerson, "and I'm " + age);
// }
// sayHello("tesla", 33);
// sayHello("nico", 25);

// // Function을 활용하여 계산기 만들기
// function plus (a, b){
//     console.log(a+b);
// }
// plus(3, 5); //2.8 04:32

// // player.sayHello() 만들기
// const player = {
//     name: "nico",
//     sayHello: function(otherPersonsName){
//         console.log("hello!" + otherPersonsName + " nice to meet you!");
//     },
// }
// console.log(player.name); //"nico"
// player.sayHello("lynn"); //hello! lynn nice to meet you!

// // recap 1 array.push
// const toBuy = ["potato", "tomato", "pizza"];

// console.log(toBuy); //potato tomato pizza
// toBuy[2] = "water";
// console.log(toBuy); //potato water pizza
// toBuy.push("meat");
// console.log(toBuy); // potato water pizza meat

// // recap 2 object
// const player = {
//     name: "nico",
//     age: 98,
// }
// console.log(player); // {name: "nico", age: "98"}
// player.name = "nicolas";
// console.log(player); // {name: "nicolas", age: "98"}
// player.sexy = "soon";
// console.log(player); // {name: "nicolas", age: "98", sexy: "soon"}

// // recap 2 function
// function plus(a,b) {
//     console.log(a + b);
// }
// plus(3, 5); // 8

// // recap 2 calculator
// const calculator = {
//     add: function (a,b) {
//         console.log(a+b);
//     },
//     minus: function (a,b) {
//         console.log(a-b);
//     },
//     divide: function (a,b) {
//         console.log(a/b);
//     },
//     times: function (a,b) {
//         console.log(a*b);
//     },
//     power: function (a,b) {
//         console.log(a**b);
//     }
// }

// calculator.add(3,5); //8
// calculator.minus(5,3); //2
// calculator.divide(9,3); //3
// calculator.times(2,8); //16
// calculator.power(8,2); //36

// // console -> alert *Ctrl + Shift + L 혹은 Alt + 좌클릭으로 여러 줄 선택
// const calculator = {
//     add: function (a,b) {
//         alert(a+b);
//     },
//     minus: function (a,b) {
//         alert(a-b);
//     },
//     divide: function (a,b) {
//         alert(a/b);
//     },
//     times: function (a,b) {
//         alert(a*b);
//     },
//     power: function (a,b) {
//         alert(a**b);
//     }
// }

// console.log(calculator.add(3,5)); //창에는 8이 뜨지만 console에는 undefined

// // function은 return 값을 반환한다.
// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//     return ageOfForeigner + 2;
// }

// const KrAge = calculateKrAge(age);
// console.log(KrAge); // 98

// // return 활용하여 calculator 코드 작성
// const calculator = {
//     plus: function(a,b) {
//         return a + b;
//     }
// };

// const plusResult = calculator.plus(2, 3);

// console.log(plusResult);

// // prompt and type
// const age = prompt("How old are you?") // 창 띄워서 사용자에게 값 받기
// console.log(typeof age); // string

// // string => Integer
// console.log(typeof "15", typeof parseInt("15")); // string number
// console.log(age, parseInt(age)); // 입력한 값이 string, number 타입으로 출력, string을 입력할 경우 string, NaN으로 출력

// // 코드 정리
// const age = parseInt(prompt("How old are you?"));
// console.log(age);

// // NaN 판별 isNaN
// const age = parseInt(prompt("How old are you?"));
// console.log(isNaN(age)); // Boolean 반환

// // if(condition){} else {}
// if(condition){
//     // condition == true
// } else {
//     // condition == false
// }

// // 활용
// const age = parseInt(prompt("How old are you?"));

// if(isNaN(age)){
//     console.log("Please write a number");
// } else {
//     console.log("Thank you for writing your age.");
// };

// // 음주측정기 만들기
// // and(&&)는 둘다 true여야 true, or(||)는 둘 중 하나만 true여도 true
// const age = parseInt(prompt("How old are you?"));

// if(isNaN(age) || age < 0){
//     console.log("Please write a real positive number");
// } else if(age < 18){
//     console.log("You are too young");
// } else if(age >= 18 && age <=50){ // && == and, || == or
//     console.log("You can drink");
// } else if(age === 100){ // === 같은지 확인
//     console.log("wow you are wise");
// } else if(age !== 100){ // !== 다른지 확인
//     console.log("good")
// } else {
//     console.log("Please Stop drinking");
// }

// // && || 활용
// if((a && b) || (c && d) || (x || y)) {
//     // true 이므로 코드 실행 된다.
// }

// HTML과 상호작용 document objects 활용
// document.title // html에 작성한 title(Momentum)이 출력된다.
// document.title = "Hi" // 브라우저 콘솔창에서 값 변경 가능

// HTML에 h1 작성 후 id 지정, 크롬 콘솔에서 확인
// document.getElementById("title")

// ID로 접근
// const title = document.getElementById("title");
// console.dir(title);

// title.innerText = "Got you!"; // title.innerText로 title 변경

// console.log(title.id); // title objects 내 id에 접근
// console.log(title.className); // title objects 내 className에 접근

// ClassName으로 접근
// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

// querySelector, querySelectorAll -> element를 CSS 방식으로 검색
// const title = document.querySelector(".hello h1");
// console.log(title); // querySelector는 한 개만 가져온다.

// const title = document.querySelector(".hello h1");
// const title = document.querySelectorAll(".hello h1");
// const title = document.getElementById("hello");
// const title = document.querySelector(".hello:first-child h1");
// title.innerText = "Hello";

// background-color 조작
// console.dir(title); // element 내부 확인
// title.style.color = "blue" // 원하는 값에 접근하여 변경

// eventListner
// const title = document.querySelector(".hello:first-child h1");

// function handleTitleClick() {
//     console.log("title was clicked!");
//     title.style.color = 'blue';
// }

// function handleMouseEnter(){
//     title.innerText = "Mouse is here!";
// }

// function handleMouseLeave(){
//     title.innerText = "Mouse is gone!";
// }

// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);
// click 할 경우에 handleTitleClick 함수를 실행

// h1 HTML element mdn 구글링 후 Web APIs 확인
// HTMLelement 클릭 후 event 탭 확인
// 이걸 하기 싫다면
// console.dir(title);
// console 창에서 h1 클릭 후 objects 내부에서 onEvent 찾기

// 위와 같은 코드를 .on~코드로 변형해서 사용 가능
// const h1 = document.querySelector(".hello:first-child h1");

// function handleTitleClick() {
//     console.log("title was clicked!");
//     h1.style.color = 'blue';
// }

// function handleMouseEnter(){
//     h1.innerText = "Mouse is here!";
// }

// function handleMouseLeave(){
//     h1.innerText = "Mouse is gone!";
// }

// h1.onclick = handleTitleClick;
// h1.onmouseenter = handleMouseEnter;
// h1.addEventListener("mouseleave", handleMouseLeave);
// // addEventListner를 사용하면 .removeEventLister로 이벤트를 없앨 수 있으므로 유용하다.

// // window 이벤트 중에 resize 활용
// // document.으로 title, head, body 등을 불러올 수 있다.
// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// window.addEventListener("resize", handleWindowResize);
// // window 이벤트 중에 copy 활용
// function handleWindowCopy(){
//     alert("copier!"); // ctrl+c 입력 시 copier! 안내창 출력
// }

// window.addEventListener("copy", handleWindowCopy);

// // window 이벤트 중에 on/offline 활용
// function handleWindowOffline() {
//     alert("SOS no WIFI");
// }

// function handleWindowOnline(){
//     alert("WIFI is connected!")
// }

// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// // CSS in Javascript

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor; // 값이 없고 비어 있는 변수
//     if(currentColor === "blue"){
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);

// 위 내용을 css에 작성하고 연동하기
const h1 = document.querySelector("div.hello:first-child h1");

// css 에서 .active 활용, h1의 className이 active라면 비우고, 아니라면 active를 채워넣기
function handleTitleClick() {
    // active를 변수에 정의
    // const ClickedClass = "active";
    // classList.contains.remove(class), classList.contains.add(class) 활용
    // 기존 class 보존, 변경 등 가능
    // if(h1.classList.contains(ClickedClass)){
    //     h1.classList.remove(ClickedClass);
    // } else {
    //     h1.classList.add(ClickedClass);
    // }
    // toggle을 활용한다면 더욱 편하게 정리 가능
    // toggle은 h1의 classList에 active class가 있는지 확인하고
    // 있다면 제거, 없다면 추가하는 기능을 가지고 있다.
    h1.classList.toggle("active");
}

h1.addEventListener("click", handleTitleClick);
