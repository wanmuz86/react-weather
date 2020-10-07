import React from 'react';

class WeatherSearch extends React.Component {

    constructor(){
        super();
        this.state = {
          cityName:''
        }
    }
    render(){
        return (
            <div className="row py-3 px-3">
            <div className="col-9">
            <input type="text" className="form-control" id="cityinput" 
            placeholder="Enter City" value={this.state.cityName} 
            onChange={(e)=> this.setState({cityName:e.target.value})}/>
          </div>
          <div className="col-3">
            <button type="submit" 
            className="btn btn-primary mb-3" 
            onClick={()=>this.props.handleSearch(this.state.cityName)}>Search</button>
            </div>
          </div>)
    }
}
export default WeatherSearch;