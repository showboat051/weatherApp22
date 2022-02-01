function getWeather() {
        const apiKey = 'QVYL5LAZMZWQR3BM5H77WSZ3P';

   fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/dallas?unitGroup=metric&include=current&key=${apiKey}&contentType=json`).then(Response => {
      return Response.json();
       console.log( Response);
   }).then ( data => {
       console.log(data);
   })
   
}

// fetchWeather();

// function getWeather() {
    
//     // my request
//     const apiKey = 'QVYL5LAZMZWQR3BM5H77WSZ3P';
//     // fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/dallas?unitGroup=metric&include=current&key=QVYL5LAZMZWQR3BM5H77WSZ3P&contentType=json')
//     // .then(res => res.json())
//     // .then(data => console.log(data));

//     // example request
//     fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York%20City%2CNY?unitGroup=us&key=${apiKey}&contentType=json`, {
//         method: 'GET', 
//         headers: {
       
//         },
                 
//       }).then(response => {
//         if (!response.ok) {
//             console.log(response);
//           throw response; //check the http response code and if isn't ok then throw the response as an error
//         }
                  
//         return response.json(); //parse the result as JSON
      
//       }).then(response => {
//         //response now contains parsed JSON ready for use
//         processWeatherData(response);
      
//       }).catch((errorResponse) => {
//         if (errorResponse.text) { //additional error information
//           errorResponse.text().then( errorMessage => {
//             //errorMessage now returns the response body which includes the full error message
//           })
//         } else {
//           //no additional error information 
//         } 
//       });
// } // getWeather()



