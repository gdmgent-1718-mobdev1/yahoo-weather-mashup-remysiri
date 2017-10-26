(function() {



	function WeatherApp()
	{

		let _weatherServices,
			_weatherElement,
			_weatherItems;


		function init()
		{
			console.log('1. Initialize Application');
			_weatherServices = new WeatherService();
			_weatherElement = document.querySelector('.weather-app');
			loadWeatherData();

		}

		function loadWeatherData()
		{
			_weatherServices.loadWeather()
			.then(function(data) {
				_weatherItems = data;
				updateWeatherUI();
				console.log('Updating Weather UI');
			})
			.catch(function(reject) {
				console.log('Fail Updating Weather UI')
				console.log(reject);
			})
		}

		function updateWeatherUI()
		{
			document.querySelector('#btn-submit').addEventListener('click', function(ev) {
				ev.preventDefault();

				var currentDate = new Date();


				let tempStr = "";

				tempStr += `
					<div class="weather-main">
						<h1>${ _weatherItems.query.results.channel.location.city }</h1>
						<h2>${ _weatherItems.query.results.channel.item.condition.text }</h2>
						<h3>${ _weatherItems.query.results.channel.item.condition.temp }<span class="unit">°C</span></h3>
					</div>

					<div class="weather-today-conditions">
						<div class="weather-condition">Luchtvochtigheid ${ _weatherItems.query.results.channel.atmosphere.humidity }%</div>
						<div class="weather-condition">Windsnelheid ${ _weatherItems.query.results.channel.wind.speed } km/h</div>
						<div class="weather-condition">Zichtbaarheid ${ _weatherItems.query.results.channel.atmosphere.visibility } km</div>
					</div>

					<div class="weather-forecast">
						<div class="day">
							<div class="weathfor weather-day"><p>${ _weatherItems.query.results.channel.item.forecast[0].day }, ${ _weatherItems.query.results.channel.item.forecast[0].code }</p></div>
							<div class="weathfor weather-icon">${ _weatherItems.query.results.channel.item.forecast[0].text }</div>
							<div class="weathfor weather-high">${ _weatherItems.query.results.channel.item.forecast[0].high }</div>
							<div class="weathfor weather-low">${ _weatherItems.query.results.channel.item.forecast[0].low }</div>
							<div class="clear-fix"></div>
						</div>

						<div class="day">
							<div class="weathfor weather-day"><p>${ _weatherItems.query.results.channel.item.forecast[1].day }, ${ _weatherItems.query.results.channel.item.forecast[1].code }</p></div>
							<div class="weathfor weather-icon">${ _weatherItems.query.results.channel.item.forecast[1].text }</div>
							<div class="weathfor weather-high">${ _weatherItems.query.results.channel.item.forecast[1].high }</div>
							<div class="weathfor weather-low">${ _weatherItems.query.results.channel.item.forecast[1].low }</div>
							<div class="clear-fix"></div>
						</div>

						<div class="day">
							<div class="weathfor weather-day"><p>${ _weatherItems.query.results.channel.item.forecast[2].day }, ${ _weatherItems.query.results.channel.item.forecast[2].code }</p></div>
							<div class="weathfor weather-icon">${ _weatherItems.query.results.channel.item.forecast[2].text }</div>
							<div class="weathfor weather-high">${ _weatherItems.query.results.channel.item.forecast[2].high }</div>
							<div class="weathfor weather-low">${ _weatherItems.query.results.channel.item.forecast[2].low }</div>
							<div class="clear-fix"></div>
						</div>

						<div class="day">
							<div class="weathfor weather-day"><p>${ _weatherItems.query.results.channel.item.forecast[3].day }, ${ _weatherItems.query.results.channel.item.forecast[3].code }</p></div>
							<div class="weathfor weather-icon">${ _weatherItems.query.results.channel.item.forecast[3].text }</div>
							<div class="weathfor weather-high">${ _weatherItems.query.results.channel.item.forecast[3].high }</div>
							<div class="weathfor weather-low">${ _weatherItems.query.results.channel.item.forecast[3].low }</div>
							<div class="clear-fix"></div>
						</div>

						<div class="day">
							<div class="weathfor weather-day"><p>${ _weatherItems.query.results.channel.item.forecast[4].day }, ${ _weatherItems.query.results.channel.item.forecast[4].code }</p></div>
							<div class="weathfor weather-icon">${ _weatherItems.query.results.channel.item.forecast[4].text }</div>
							<div class="weathfor weather-high">${ _weatherItems.query.results.channel.item.forecast[4].high }</div>
							<div class="weathfor weather-low">${ _weatherItems.query.results.channel.item.forecast[4].low }</div>
							<div class="clear-fix"></div>
						</div>

						<div class="day">
							<div class="weathfor weather-day"><p>${ _weatherItems.query.results.channel.item.forecast[5].day }, ${ _weatherItems.query.results.channel.item.forecast[5].code }</p></div>
							<div class="weathfor weather-icon">${ _weatherItems.query.results.channel.item.forecast[5].text }</div>
							<div class="weathfor weather-high">${ _weatherItems.query.results.channel.item.forecast[5].high }</div>
							<div class="weathfor weather-low">${ _weatherItems.query.results.channel.item.forecast[5].low }</div>
							<div class="clear-fix"></div>
						</div>

						<div class="day">
							<div class="weathfor weather-day"><p>${ _weatherItems.query.results.channel.item.forecast[6].day }, ${ _weatherItems.query.results.channel.item.forecast[6].code }</p></div>
							<div class="weathfor weather-icon">${ _weatherItems.query.results.channel.item.forecast[6].text }</div>
							<div class="weathfor weather-high">${ _weatherItems.query.results.channel.item.forecast[6].high }</div>
							<div class="weathfor weather-low">${ _weatherItems.query.results.channel.item.forecast[6].low }</div>
							<div class="clear-fix"></div>
						</div>
					</div>
				`;

				_weatherElement.innerHTML = tempStr;
			});
		}

		return {
			init: init
		}
	}

	window.addEventListener('load', function(ev)
	{
		const app = new WeatherApp();
		app.init();
	});


})();