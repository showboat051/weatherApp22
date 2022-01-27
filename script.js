// function getWeather() {
//    fetch('api.openweathermap.org/data/2.5/weather?q=London&appid=94f3f05eb827c75e7211a374d0a92167').then(Response => {
//        console.log('resolved' , Response);
//    }).catch((err) => {
//        console.log('rejected', err);
//    })
// }

// // fetchWeather();
// alert('heyae')


// fetch(`api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`)
// .then(Response => {
//     return Response.json();
// })
// .then(Response => {
//     console.log(Response)
    
// })

// let weather = {
//      apiKey : '94f3f05eb827c75e7211a374d0a92167',
//      getWeather: function(city) {
//          fetch("api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey)
//          .then((response) => response.json())
//          .then((data) => console.log(data));
//         }
//     }

    // let weather = {
    //     apiKey : '94f3f05eb827c75e7211a374d0a92167',
    //     getWeather: function(city) {
    //         fetch("api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey)
    //         .then(async Response => {
    //             try {
    //                 const data = await Response.json()
    //                 console.log('response data', data);
    //             }
    //         }) finally{
                
    //         }
    //        } // getWeather()
    //    } // weather object
   
// let weather = {
//     apiKey : '94f3f05eb827c75e7211a374d0a92167',
//     getWeather: async function(city) {
//         const url =`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//     }
// }

// async function getWeather(city) {
//     const apiKey = "94f3f05eb827c75e7211a374d0a92167";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     // JSON.parse(JSON.stringify(data))
//     console.log(data);
// }

const ft = new FetchWeather();

const city = document.getElementById("cityBox");
const button = document.getElementById("submit");
button.addEventListener( "click" , () => {
    const currentCity = city.value;

    ft.getWeather(currentCity).then ((data) => {
        console.log(data);
    })
})




