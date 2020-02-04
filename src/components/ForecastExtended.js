import React, { Component } from 'react';
import {getUrlForecastByCity} from './../services/getUrlWeatherByCity';
import transformForecast from './../services/transformForecast';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';


class ForecastExtended extends Component {

  constructor(){
    super();
    this.state = { forecastData: null,}
  }

  renderForecastItemDays= (forecastData) => {
    return (forecastData.map(forecast => (
        <ForecastItem
          key={`${forecast.weekDay}${forecast.hour}`}
          weekDay={forecast.weekDay}
          hour={forecast.hour}
          data={forecast.data}>
        </ForecastItem>
    )))
  }

  renderProgress = () => {
    return (<div className="progress">
              <CircularProgress/>
              <h3>&nbsp;&nbsp;&nbsp;&nbsp;Cargando Pronostico extendido...</h3>
            </div>
            )
  }

  updateCity = (city) => {
    const url = getUrlForecastByCity(city);
    fetch(url).then(resolve => {
      return resolve.json();
    }).then(data => {
      console.log(data);
      const newForecastData = transformForecast(data);
      console.log(transformForecast(data));
      this.setState({ forecastData: newForecastData })
    })
  }

  componentDidMount() {
    this.updateCity(this.props.city);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.city !== this.props.city){
      this.setState({ forecastData: null});
      this.updateCity(nextProps.city);
    }
  }






  render(){
    const {city} = this.props;
    const {forecastData} = this.state;
    return(
      <div>
        <div className='tittleDiv'>
          <h2 className='forecastTittle'>{`ForecastExtended para ${city}`}</h2>
        </div>
        {
          forecastData ?
            this.renderForecastItemDays(forecastData)
          :
            this.renderProgress()
        }
      </div>
    )
  }
}



ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}


export default ForecastExtended;
