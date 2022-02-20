const API_KEY = "1ecd13b48ee2cea2f6290c4d8e070d5d"
const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
    const 위도 = position.coords.latitude;
    const 경도 = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${위도}&lon=${경도}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
        });
}
function onGeoFuck() {
    alert("당신을 위한 날씨데이터를 찾지 못했슴당");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoFuck);