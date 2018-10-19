import React, { Component } from 'react';
import './App.css';
import LocationsList from './LocationsList.js'

class App extends Component {
  state = {
    locations: [],
    checked: true
  }

  hideLocation = (location) => {
    var locations = this.state.locations;
    locations[location.uid].visible ? (locations[location.uid].visible = false) : (locations[location.uid].visible = true);
    this.setState({ locations })
  }

  componentWillMount = () => {
    fetch('https://api.foursquare.com/v2/venues/explore?client_id=O0SATKPGPFMI4WVJEGPVF5RNTLEEFOOYJURWC4FMGJBOYQIH&client_secret=ZTKQXLN551FBBHXA442B5HXV5RB1KYRTSGOHZCNKQGH1VLJE&v=20180323&ll=40.751258,-73.992813&limit=10&query=pizza')
    .then(res => res.json())
    .then((data) => {
      let id = 0;
      var locations = [];
      data.response.groups[0].items.forEach((place) => {
        locations.push({uid: id, location: { lat: place.venue.location.lat, lng: place.venue.location.lng }, name: place.venue.name })
        this.setState({ locations })
        id++;
      })
    })
    .catch(error => console.log(error));
  }

  render() {

    return (

      <div className="App">
        <LocationsList locations={this.state.locations} checked={this.state.checked} onHideLocation={this.hideLocation} onCompareList={this.compareList}/>
      </div>
    );
  }
}

export default App;
