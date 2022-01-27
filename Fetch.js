class FetchWeather {
    async getWeather(input) {
        const apiKey = "94f3f05eb827c75e7211a374d0a92167";

        // URL request

        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`);

        const data = await response.json();
        console.log(data);
        return data;
    } // getWeather()

} // FetchWeather Class
