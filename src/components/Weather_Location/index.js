import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './Weather_Data';
import transformWeather from './../../services/transformWeather';
import {getUrlWeatherByCity} from './../../services/getUrlWeatherByCity';
import './styles.css';


class WeatherLocation extends Component {

  constructor(props) {
    super(props);
    const {city} = props;
    this.state = {
      city,
      data: null,
    };
  }


  handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city);
    fetch(api_weather).then(resolve => {
      return resolve.json();
    }).then(data => {
      const newData = transformWeather(data);
      this.setState({
        data: newData,
      });

    })
  }

  componentDidMount() {
    this.handleUpdateClick();
  }



  render() {
    const {onWeatherLocationClick} = this.props;
    const {city, data} = this.state;
    return (
      <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        { data ?
          <WeatherData data={data}></WeatherData>
          : <CircularProgress ></CircularProgress>
        }
      </div>
  );
  }
};


WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;
