// 날씨 API 활용
// getCurrentPosition은 실행했을 때, 에러났을 때 각각 실행하는 코드 작성 가능
// latitude, longitude 얻을 수 있다.
const API_KEY = "e6e20d66b161c74539e71661c58dcbf5";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // 화씨 온도가 나오므로 링크 끝에 &units=metric 추가해서 섭씨로 변경
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // fetch 함수 활용 crhome-network-weather 클릭-Preview
    fetch(url);
};
function onGeoError(){
    alert("Can't find you. No weather for you.")
};

// https://openweathermap.org/api
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


// latitude
// : 
// 35.1404032
// longitude
// : 
// 129.1091968
