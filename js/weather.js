const API_KEY = "7db808a1377ecedd5bb581903401c497";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const region = document.querySelector("#weather span:last-child");
      region.innerText = data.name;
      weather.innerText = `@${data.weather[0].main}, `;
    });
}
function onGeoError() {
  alert("Can't Find You!");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
