//**************************RESOURCES************************************* */

const weatherInfoDiv = document.getElementById("weatherInfo");
const weatherDescDiv = document.getElementById("weatherDesc");
const city = document.getElementById("cityBox").value;

function getWeather(city) {
        const apiKey = 'QVYL5LAZMZWQR3BM5H77WSZ3P';
       
   fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`) 
   .then((data) => data.json())
   
   .then((data) => console.log(data));
   
    
    // const weather = data.currentConditions.temp;
    // const dayDesc = data.description;
    // weatherInfoDiv.innerHTML = "The current temperature is " + weather + " with " + dayDesc;
    
    // weatherDescDiv.innerHTML = dayDesc;

} // getWeather()




