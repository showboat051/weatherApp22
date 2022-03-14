//**************************RESOURCES************************************* */

const weatherInfoDiv = document.getElementById("weatherInfo");
const weatherDescDiv = document.getElementById("weatherDesc");
// const city = document.querySelector("cityBox").value;

function getWeather() {
    const city = document.getElementById("cityBox").value;
        const apiKey = 'QVYL5LAZMZWQR3BM5H77WSZ3P';
        if (city.value == ' ') {
            alert("enter something")
        }

        
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`) 
        
        .then(res => {
            if(res.ok) {
                return res.json()
            } else {
                console.log('nope');
            }
        })
        .then(data => {
            console.log(data)
            var currentTemp = data.currentConditions.temp;
            weatherInfoDiv.innerHTML = "The current temperature here is " + currentTemp;  
        } 

        )} // getWeather()
        
       
       
       
       
       
       
        function showWeather(data) {
            // const weather = data.description[0];
        } // showWeather()
        
        
        // .catch(error => console.log('error'))
        
        
        
        // const weather = data.currentConditions.temp;
        // const dayDesc = data.description;
        
        // weatherDescDiv.innerHTML = dayDesc;
        
        
        