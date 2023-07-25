// random background
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// html에 추가
// <img> element를 html에 생성
const bgImage = document.createElement("img");

// background image의 path 설정 및 random images 선택하도록 코딩
bgImage.src = `img/${chosenImage}`;

// bgImage를 body에 추가하기 appendChile는 맨 앞에, prepend는 맨 뒤에 추가
document.body.appendChild(bgImage);

