import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer.js'

class App extends Component {
  state = {
    locations: [
      {uid: 1, location: {lat: 40.7413549, lng: -73.9980244}}
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
