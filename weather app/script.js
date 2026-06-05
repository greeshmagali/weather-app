let userInput = document.getElementById("city");
let button = document.getElementById("weatherBtn");
let result = document.getElementById("result");

button.onclick = function() {
    let city = userInput.value;
    let apiKey = "a6e673d5a4a237fa0cd37c782b391db0";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            result.textContent = `
         ${data.name} 
         ${data.sys.country}
         Temp: ${data.main.temp}°C
        Weather: ${data.weather[0].description}
        Humidity: ${data.main.humidity}%
`;
        })
        .catch(function() {
            result.textContent = "❌City not found";
        });

}