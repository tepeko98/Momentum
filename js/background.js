// // random background
// const images = [
//     "0.jpg",
//     "1.jpg",
//     "2.jpg",
//     "3.jpg",
//     "4.jpg",
//     "5.jpg",
// ];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// // html에 추가
// // <img> element를 html에 생성
// const bgImage = document.style.backgroundImage.createElement("img");

// // background image의 path 설정 및 random images 선택하도록 코딩
// bgImage.src = `img/${chosenImage}`;

// // bgImage를 body에 추가하기 appendChile는 맨 앞에, prepend는 맨 뒤에 추가
// document.body.style.backgroundImage.appendChild(bgImage);

document.addEventListener('DOMContentLoaded', function() {
    const images = [
      "0.jpg",
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
    ];
  
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url(img/${chosenImage})`;
    document.body.style.backgroundSize = "cover"; // 배경 이미지 크기 조정 추가
    
});
