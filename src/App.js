import React from 'react';
import LocationList from './components/LocationList';
import logo from './logo.svg';
import './App.css';

const cities = [
  'Guadalajara, mx',
  'Bogota, col',
  'New York, us',
  'London, uk',
  'Buenos Aires, ar',
  'Lima, peru',
  'Sydney, au'
]

function App() {

  const handleSelectedLocation = city => {
    console.log(`handleSelectedLocation: ${city}`);
  }

  return (
    <div className="App">
    <LocationList cities={cities} onSelectedLocation={handleSelectedLocation}/>
    </div>
  );
}

export default App;
