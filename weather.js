function getWeather() {
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let location = document.getElementById("location");
  // let ico = document.getElementById("ico");


  let api = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "f146799a557e8ab658304c1b30cc3cfd";
  let locationIcon = document.querySelector('.weather-icon');


  location.innerHTML = "fetching weather data...";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

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
        temperature.innerHTML = temp + "° C";
        location.innerHTML = data.name;
          // + " (" + latitude + "°, " + longitude + "°)"
        description.innerHTML = data.weather[0].main;
        ico.innerHTML = data.weather[0].icon;
        //locationIcon.innerHTML = '<img src="/icon/${data.weather[0].icon;}.png">';
        var test = data.weather[0].icon;
        var fileName = `<img src="icon/${test}.gif" width = "50">`;
        locationIcon.innerHTML = fileName;

      });

  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

}
  getWeather();
