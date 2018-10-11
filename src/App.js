import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer.js'

class App extends Component {
  state = {
    locations: [
      {uid: 1, location: { lat: 40.75775549999999, lng: -74.0026864 }, name: "Jacob K. Javits Convention Center"},
      {uid: 2, location: { lat: 40.7505045, lng: -73.9934387 }, name: "Madison Square Garden"},
      {uid: 3, location: { lat: 40.7484405, lng: -73.98566439999999 }, name: "Empire State Building"},
      {uid: 4, location: { lat: 40.758895, lng: -73.985131 }, name: "Times Square"},
      {uid: 5, location: { lat: 40.741328, lng: -74.0032471 }, name: "Google"}
    ]
  }

  render() {
    return (
      <div className="App">
        <MapContainer locations={this.state.locations}/>
      </div>
    );
  }
}

export default App;
