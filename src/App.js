import React, {Component} from 'react';
import {Paper} from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {Toolbar} from '@material-ui/core';
import {Row, Col, Grid} from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended'
import logo from './logo.svg';
import './App.css';

const cities = [
  'Guadalajara, mx',
  'Dallas, us',
  'New York, us',
  'London, uk',
  'Buenos Aires, ar',
  'Lima, peru',
  'Sydney, au',
]

class App extends Component {


  constructor () {
    super();
    this.state = {
      city: null,
    }
  }

  handleSelectedLocation = city => {
    let setTitle = city.substring(0, city.indexOf(','))
    this.setState({city: setTitle});
    //this.setState({city});
    console.log(`handleSelectedLocation: ${city}`);
  }

  render(){
    const {city} = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <h1>Weather App</h1>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">{
                city === null
                ? <div>
                  <h1>No se ha seleccionado alguna ciudad</h1>
                  <div className='byLrd'><h12>By EDMC (Lord Auch)</h12></div>
                </div>
                : <ForecastExtended city={city}></ForecastExtended>
              }

              </div>
            </Paper>
          </Col>
        </Row>

      </Grid>
    )
  };
}

export default App;
