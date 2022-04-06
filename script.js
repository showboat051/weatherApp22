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
            
            const dayToday = document.getElementById("day0");
            dayToday.innerHTML = data.days[0].temp;

            const day1 = document.getElementById("day1");
            day1.innerHTML = data.days[1].temp;

            const day2 = document.getElementById("day2");
            day2.innerHTML = data.days[2].temp;

            const day3 = document.getElementById("day3");
            day3.innerHTML = data.days[3].temp;

            const day4 = document.getElementById("day4");
            day4.innerHTML = data.days[4].temp;

            const day5 = document.getElementById("day5");
            day5.innerHTML = data.days[5].temp;

            const day6 = document.getElementById("day6");
            day6.innerHTML = data.days[6].temp;
            // sevenDay.innerHTML = data.days[0].temp

            // generating the table from clicks
            const tempTable = document.createElement("table");
            const tempTableBody = document.createElement("tbody");
            tempTable.appendChild(tempTableBody);

            for( i = 0; i <data.length; i++) {
                let temperature = data.days[i].temp
            }

            for (i= 0; i < 7; i++) {
                const thDay = document.createElement('th');
                tempTableBody.appendChild(thDay);
                const trData = document.createElement('tr');
                thDay.appendChild(trData); 
                
            }

            
        } 
        
        )} // getWeather()
        
       
        
        
        
       
       
        function showWeather(data) {
            // const weather = data.description[0];
        } // showWeather()
        
        
        // .catch(error => console.log('error'))
        
        
        
        // const weather = data.currentConditions.temp;
        // const dayDesc = data.description;
        
        // weatherDescDiv.innerHTML = dayDesc;
        
        
        