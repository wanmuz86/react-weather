import React from 'react';
import WeatherTable from './WeatherTable';
import WeatherDetail from './WeatherDetail';
import WeatherSearch from './WeatherSearch';
class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            weathers : [],
            selectedWeather : null
        }
    }
    render() {
        return (
            <div className="container">
                <WeatherSearch handleSearch={this.handleSearch}/>
                <WeatherTable weathers={this.state.weathers} handleWeatherSelect={this.handleWeatherSelect}/>
               { this.state.selectedWeather ?
                <WeatherDetail selectedWeather={this.state.selectedWeather}/>
                :
                <div/>
               } 
            </div>
        )
    }

    handleSearch = (city) =>{
        console.log(city)
        this.fetchApi(city)
    }
    handleWeatherSelect = (dt) =>{
        console.log(dt)
        let selectedWeather = this.state.weathers.filter(val=>{
            return val.dt === dt
        })
        this.setState({
            selectedWeather:selectedWeather
        })
    }

    componentDidMount() {
       
    }

    fetchApi(city) {
        fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=9782b24d506f53b56b45b8f288d37803

        `)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    weathers:data["list"]
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export default Main;