let weather = {
     city: document.querySelector(".citySearchBar"),

    apiKey: "QVYL5LAZMZWQR3BM5H77WSZ3P",
    fetchWeather: function(city) {
        fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "?key=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }, // fetchweather function()
    searchBar: function() {
        this.fetchWeather(document.querySelector(".citySearchBar").value)
    }
} // end of weather object


document.getElementById("submit").addEventListener('click' , function () {
    console.log('it works');
})

