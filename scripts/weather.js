
function getWeather() {
  let locationIcon = document.querySelector('.weather-icon');
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let location = document.getElementById("location");

  let api = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "f146799a557e8ab658304c1b30cc3cfd";

  let userUnit = localStorage.getItem("userUnit") || "C"; // Get user's last unit choice, default to Celsius
  if (location) {
    location.innerHTML = "fetching weather data...";
  }

  let cachedPosition = localStorage.getItem("position");
  if (cachedPosition) {
    let { latitude, longitude } = JSON.parse(cachedPosition);
    fetchWeather(latitude, longitude);
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    localStorage.setItem("position", JSON.stringify({ latitude, longitude }));
    fetchWeather(latitude, longitude);
  }

  function error() {
    let cachedPosition = localStorage.getItem("position");
    if (cachedPosition) {
      let { latitude, longitude } = JSON.parse(cachedPosition);
      fetchWeather(latitude, longitude);
    } else {
      location.innerHTML = "Unable to retrieve your location";
    }
  }

  function fetchWeather(latitude, longitude) {
    let url =
      api +
      "?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      apiKey +
      "&units=metric";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let temp = data.main.temp;
        temperature.innerHTML = convertTemp(temp, userUnit) + "° " + userUnit;
        location.innerHTML = data.name;
        description.innerHTML = data.weather[0].main;
        let iconCode = data.weather[0].icon;
        locationIcon.innerHTML = `<img src="icon/${iconCode}.gif" width="50">`;

        // Add click event to toggle temperature unit
        temperature.addEventListener("click", () => {
          userUnit = toggleUnit(userUnit);
          localStorage.setItem("userUnit", userUnit);
          temperature.innerHTML = convertTemp(temp, userUnit) + "° " + userUnit;
        });
      });
  }

  function toggleUnit(currentUnit) {
    return currentUnit === "C" ? "F" : "C";
  }

  function convertTemp(tempC, targetUnit) {
    if (targetUnit === "C") {
      return Math.round(tempC);
    } else {
      return Math.round(tempC * 9 / 5 + 32);
    }
  }
  
}

getWeather();

