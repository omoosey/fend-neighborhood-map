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

  componentDidMount = () => {
    fetch('https://api.foursquare.com/v2/venues/explore?client_id=O0SATKPGPFMI4WVJEGPVF5RNTLEEFOOYJURWC4FMGJBOYQIH&client_secret=ZTKQXLN551FBBHXA442B5HXV5RB1KYRTSGOHZCNKQGH1VLJE&v=20180323&ll=40.751258,-73.992813&limit=10&query=pizza')
    .then(res => res.json())
    .then((data) => {
      let id = 5;
      data.response.groups[0].items.forEach((place) => {
        console.log("id: " + id + " " + place.venue.location.lat + " " + place.venue.location.lng);
        id++;
      })
    })
    .catch(error => console.log(error));
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
