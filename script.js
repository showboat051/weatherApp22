function fetchWeather() {
   fetch('api.openweathermap.org/data/2.5/weather?q=London&appid=94f3f05eb827c75e7211a374d0a92167').then(res => {
       console.log(res);
   })
}

fetchWeather();