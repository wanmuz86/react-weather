import React from 'react';

function WeatherTable(props) {
    const transformDate = (date) => {
        return (new Date(date)).toDateString()
    }
    return <table className="table table-bordered table-striped table-hover">
        <thead>
            <tr>
                <th></th>
                <th>Weather</th>
                <th>Date</th>
                <th>Temperature</th>
            </tr>
        </thead>
        <tbody>
            {
                props.weathers.map(val => {
                    return (
                        <tr key={val.dt} onClick={() => props.handleWeatherSelect(val.dt)}>
                            <td><img src={`https://openweathermap.org/img/wn/${val.weather[0].icon}@2x.png`} />
                            </td>
                            <td>{val.weather[0].main}</td>
                            <td>{transformDate(val.dt * 1000)}</td>
                            <td>{(val.temp.day - 273.15).toFixed(0)} &deg; C</td>
                        </tr>
                    )
                })
            }

        </tbody>
    </table>;
}
export default WeatherTable;