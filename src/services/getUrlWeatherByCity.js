
import {url_base_weather, api_key, url_extended_forecast} from './../constants/api_url';

export const getUrlWeatherByCity = (city) => {
  return `${url_base_weather}?q=${city}&appid=${api_key}`
}

export const getUrlForecastByCity = (city) => {
  return `${url_extended_forecast}?q=${city}&appid=${api_key}`
}
