alert("hi");

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek[5]);

// Add one more day to the array
daysOfWeek.push("sun");

// Objects 활용법
const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

// 이런식으로 간단하게 만드는 방법이 없을까?
player.name
player.points
player.handsome
player.fat

// Objects는 중괄호로 시작하고, 안에서 = 대신 : 을 사용한다.
const player = {
    name: "nico",
    points: 10,
    fat: true,
};
// console.log 대신에 Objects.xx로 접근이 가능하다.
console.log(player.name); // nico
player.name // "nico"

// Objects 값 변경
player.fat = false;

// Objects에 새로운 값 추가
player.lastName = "potato";
player.points = player.points + 15;
console.log(player);

// Functions part One
// Function의 기본 사용법
function sayHello(){
    console.log("Hello!");
}

sayHello();
sayHello();
sayHello();
sayHello(); // Hello! 4번 출력

// Function 활용
function sayHello(nameOfPerson, age){
    console.log("Hello! my name is " + nameOfPerson, "and I'm " + age);
}
sayHello("tesla", 33);
sayHello("nico", 25);

// Function을 활용하여 계산기 만들기
function plus (a, b){
    console.log(a+b);
}
plus(3, 5); //2.8 04:32

// player.sayHello() 만들기
const player = {
    name: "nico",
    sayHello: function(otherPersonsName){
        console.log("hello!" + otherPersonsName + " nice to meet you!");
    },
}
console.log(player.name); //"nico"
player.sayHello("lynn"); //hello! lynn nice to meet you!

