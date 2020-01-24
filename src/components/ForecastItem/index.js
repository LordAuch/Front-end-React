import React from 'react';
import PropTypes from 'prop-types';
import Weather_Data from './../Weather_Location/Weather_Data';
import './styles.css';

const ForecastItem = ({weekDay, hour, data}) => {
  return (
    <div>
      <div className='horayDia'><h3>{weekDay} Hora: {hour} hs</h3></div>
      <Weather_Data data={data}></Weather_Data>
    </div>
  )
}

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.shape({
      temperature: PropTypes.number.isRequired,
      weatherState: PropTypes.string.isRequired,
      humidity: PropTypes.number.isRequired,
      wind: PropTypes.string.isRequired,
    }),
}

export default ForecastItem;
