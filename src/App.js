import React, { Component } from 'react';
import './App.css';
import LocationsList from './LocationsList.js'

class App extends Component {
  state = {
    locations: [
      {uid: 0, location: { lat: 40.75775549999999, lng: -74.0026864 }, name: "Jacob K. Javits Convention Center", visible: true},
      {uid: 1, location: { lat: 40.7505045, lng: -73.9934387 }, name: "Madison Square Garden", visible: true},
      {uid: 2, location: { lat: 40.7484405, lng: -73.98566439999999 }, name: "Empire State Building", visible: true},
      {uid: 3, location: { lat: 40.758895, lng: -73.985131 }, name: "Times Square", visible: true},
      {uid: 4, location: { lat: 40.741328, lng: -74.0032471 }, name: "Google", visible: true}
    ]
  }

  hideLocation = (location) => {
    var locations = this.state.locations;
    locations[location.uid].visible ? (locations[location.uid].visible = false) : (locations[location.uid].visible = true);
    this.setState({ locations })
  }


  render() {
    return (
      <div className="App">
        <LocationsList locations={this.state.locations} onHideLocation={this.hideLocation} onCompareList={this.compareList}/>
      </div>
    );
  }
}

export default App;
