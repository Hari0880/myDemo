const temperatureConverter = {
    
    toCelsius: function(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    },

    
    toFahrenheit: function(celsius) {
        return (celsius * 9 / 5) + 32;
    }
};
console.log(temperatureConverter.toCelsius(92.6))
console.log(temperatureConverter.toFahrenheit(33.66))
