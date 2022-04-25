//**************************RESOURCES************************************* */

const weatherInfoDiv = document.getElementById("weatherInfo");
const weatherDescDiv = document.getElementById("weatherDesc");
const goButton = document.getElementById("submit");

//*******************ENTER BUTTON****************************/
goButton.addEventListener("keyup" , function(e) {
    if(e.key == 'Enter') {
        e.preventDefault();
        getWeather();
        
    }
})

function getWeather() {
    
    
    const city = document.getElementById("cityBox").value;
    const apiKey = 'QVYL5LAZMZWQR3BM5H77WSZ3P';
    if (city.value == ' ') {
        alert("enter something")
    }
    
    // API call
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
            weatherInfoDiv.innerHTML = "The current temperature here in " + city + " is " + currentTemp + " degrees ";  
            weatherDescDiv.innerHTML = data.description

            var table = document.createElement("table");
            const sevenDay = document.getElementById("sevenDay");

            sevenDay.appendChild(table); 
            

            
        } 
        
        )} // getWeather()
        
       
        
        
        
       
       
        function showWeather(data) {
            // const weather = data.description[0];
        } // showWeather()
        
        
        // .catch(error => console.log('error'))
        
        
        
        // const weather = data.currentConditions.temp;
        // const dayDesc = data.description;
        
        // weatherDescDiv.innerHTML = dayDesc;
        
        
        