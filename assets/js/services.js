function WeatherService() {
    const URLstart = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="';
    let userInput = document.querySelector('.search-value').value;
    const URLend = '") AND u="c"&format=json';

    var URL = URLstart + userInput + URLend;

    function loadWeather() {
        return AJAX.loadJsonPByPromise(URL);
    }

    return {
        loadWeather: loadWeather
    }
};