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

// app.js에서 실행
const title = document.getElementById("title");
console.dir(title);

title.innerText = "Got you!"; // title.innerText로 title 변경

console.log(title.id); // title objects 내 id에 접근
console.log(title.className); // title objects 내 className에 접근

