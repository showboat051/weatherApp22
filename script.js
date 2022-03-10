//**************************RESOURCES************************************* */

const weatherInfoDiv = document.getElementById("weatherInfo");
const weatherDescDiv = document.getElementById("weatherDesc");
const city = document.getElementById("cityBox").value;
// const city = document.querySelector("cityBox").value;

function getWeather(city) {
        const apiKey = 'QVYL5LAZMZWQR3BM5H77WSZ3P';
        if (city == '') {
            alert("enter something")
        }

        
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`) 
        
        .then(res => {
            if(res.ok) {
                console.log(res);
                return res.json()
            } else {
                console.log('nope');
            }
        })
        .then(data =>
            console.log(data)),
            console.log("The city is " + city);
       
// .catch(error => console.log('error'))
   
    
    // const weather = data.currentConditions.temp;
    // const dayDesc = data.description;
    // weatherInfoDiv.innerHTML = "The current temperature is " + weather + " with " + dayDesc;
    
    // weatherDescDiv.innerHTML = dayDesc;

} // getWeather()




