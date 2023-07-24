// 매초마다 작업하는 코드
// setInterval(sayHello, 5000);

// 일정 시간 기다린 뒤 한 번만 작업하는 코드
// setTimeout(sayHello, 5000);

// 크롬 콘솔 창에 new Date() 입력하면 현재 시간 출력됨
// const date = new Date(); date.getDate(); date.get(day); 등등

// 매초마다 시간 가져와서 clock 완성하기
const clock = document.querySelector("h2#clock");

// function getClock() {
//     const date = new Date();
//     clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// }
// 초 단위가 10초 미만일 경우 한자리 수로 나오므로 padStart() 활용
// "1".padStart(2, "0"); 최소 2자리로, 빈 자리는 0 채우도록 하기
// padEnd의 경우는 뒷자리에 숫자를 채운다
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock()
setInterval(getClock, 1000);

