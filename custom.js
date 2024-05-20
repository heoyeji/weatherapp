const api_key = config.apikey;

let temp = document.querySelector("#temp"),
  place = document.querySelector("#place"),
  wind = document.querySelector("#wind"),
  des = document.querySelector("#des"),
  iconImg = document.querySelector("#icon");

// 현재 위치의 날씨를 가져오는 함수
function App() {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    getWeatherByCoords(lat, lon);
  });
}

const getWeatherByCoords = async (lat, lon) => {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric&lang=kr`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    updateWeather(data);
  } catch (error) {
    console.error("Fetching weather data failed:", error);
  }
};

// 도시 이름으로 날씨를 가져오는 함수
const getWeatherByCityName = async (cityname) => {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${api_key}&units=metric&lang=kr`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    updateWeather(data);
  } catch (error) {
    console.error("Fetching weather data failed:", error);
  }
};

// 날씨 정보를 업데이트하는 함수
const updateWeather = (data) => {
  temp.textContent = data.main.temp;
  place.textContent = data.name;
  wind.textContent = data.wind.speed;
  des.textContent = data.weather[0].description;
  let icon = data.weather[0].icon;
  let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  iconImg.setAttribute("src", iconUrl);
};

// 버튼 클릭 이벤트 추가
document.querySelector("#cur").addEventListener("click", () => App());
document
  .querySelector("#gim")
  .addEventListener("click", () => getWeatherByCityName("Gimpo-si"));
document
  .querySelector("#seoul")
  .addEventListener("click", () => getWeatherByCityName("Seoul"));

// 초기 호출
App();
