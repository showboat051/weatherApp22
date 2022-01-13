// // function fetchWeather() {
// //    fetch('api.openweathermap.org/data/2.5/weather?q=London&appid=94f3f05eb827c75e7211a374d0a92167').then(Response => {
// //        console.log(Response);
// //    })
// // }

// // fetchWeather();
// alert('heyae')


// fetch(`api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`)
// .then(Response => {
//     return Response.json();
// })
// .then(Response => {
//     console.log(Response)
    
// })

let weather = {
     apiKey : '94f3f05eb827c75e7211a374d0a92167',
     getWeather: function(city) {
         fetch("api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey)
         .then((response) => response.json())
         .then((data) => console.log(data));
        }
    }
