import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE
} from './../../../constants/weathers';

const icons = {
  [CLOUD]: "cloud",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [THUNDER]: "day-thunderstorm",
  [DRIZZLE]: "day-showers",
};

const sizeIcon = "4x";

const getWeatherIcon = (weatherState) =>{

  const icon = icons[weatherState];

  if(icon)
  return <WeatherIcons className="wicon" name={icon} size={sizeIcon}></WeatherIcons>;
  else {
    return <WeatherIcons className="wicon" name="day-sunny" size={sizeIcon}></WeatherIcons>;
  }
}


const WeatherTemperature = ({temperature, weatherState}) => (
  <div className="weatherTemparatureCont">
    {
      getWeatherIcon(weatherState)
    }

  <span className="temperature">{`${temperature}`}</span>
  <span className="temperatureType">{` C°`}</span>
  </div>
);


WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};


export default WeatherTemperature;
