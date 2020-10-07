import React from 'react';

function WeatherDetail({selectedWeather}){
return <div className="card py-3 px-3 text-center">
<img src={`https://openweathermap.org/img/wn/${selectedWeather.weather[0].icon}@2x.png`}/>
<p>{selectedWeather.temp.day -273 } &deg; C</p>
<p>{(new Date(selectedWeather.dt)).toDateString()}</p>
<p>{selectedWeather.humidity}</p>
<p>{selectedWeather.pressure}</p>
<p>{(new Date(selectedWeather.sunset)).toTimeString()}</p>
<p>{(new Date(selectedWeather.sunrise)).toTimeString()}</p>
</div>
}
export default WeatherDetail;