const api_key = "3b65f9d35ac8d71d03070db7f1cc51de";

let temp = document.querySelector("#temp"),
  place = document.querySelector("#place"),
  wind = document.querySelector("#wind"),
  des = document.querySelector("#des"),
  iconImg = document.querySelector("#icon");

// 현재 위치의 날씨를 가져오는 함수
function App() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재 위치 좌표:", lat, lon);
      getWeatherByCoords(lat, lon);
    },
    (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.error("사용자가 위치 공유를 거부했습니다.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.error("장치에서 위치 정보를 사용할 수 없습니다.");
          break;
        case error.TIMEOUT:
          console.error("위치 정보를 가져오는 데 시간이 초과되었습니다.");
          break;
        default:
          console.error("현재 위치 가져오기 실패:", error.message);
      }
    }
  );
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
document
  .querySelector("#busan")
  .addEventListener("click", () => getWeatherByCityName("Busan"));
document
  .querySelector("#chuncheon")
  .addEventListener("click", () => getWeatherByCityName("ChunCheon"));
document
  .querySelector("#jeju")
  .addEventListener("click", () => getWeatherByCityName("Jeju"));

// 초기 호출
App();
