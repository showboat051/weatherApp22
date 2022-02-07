//**************************RESOURCES************************************* */

const weatherInfoDiv = document.getElementById("weatherInfo");
const weatherDescDiv = document.getElementById("weatherDesc");

function getWeather() {
   
    const apiKey = 'QVYL5LAZMZWQR3BM5H77WSZ3P';
    
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey} `).then(Response => {
        return Response.json();
    }).then ( data => {
  
       console.log(data);
       
       const weather = data.currentConditions.temp;
       const dayDesc = data.description;
       weatherInfoDiv.innerHTML = "The current temperature is " + weather + " with " + dayDesc;
       
       weatherDescDiv.innerHTML = dayDesc;
   }).catch(error => {
       console.log(error)
   });
} // getWeather()




