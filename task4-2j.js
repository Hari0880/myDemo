const api = "d5922abe793e1834340d79856273d53d";
function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then((data) => {
            document.getElementById("cityName").innerHTML = data.name;
            document.getElementById("cityTemp").innerHTML = data.main.temp;
            document.getElementById("cityHumidity").innerHTML = data.main.humidity;
        })
        .catch(error => console.log("Error: ", error.message));
}

document.getElementById("getWeather").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    fetchWeather(city);
});