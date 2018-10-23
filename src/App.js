import React, { Component } from 'react';
import './App.css';
import LocationsList from './LocationsList.js'

class App extends Component {
	state = {
		locations: []
	}

	hideLocation = (location, event) => {
		const locations = this.state.locations;
		if (locations[location.uid].visible) {
		  locations[location.uid].visible = false;
		  locations[location.uid].checked = false;
		} else {
		  locations[location.uid].visible = true;
		  locations[location.uid].checked = true;
		}
		this.setState({ locations })
	}

	componentWillMount = () => {
		fetch('https://api.foursquare.com/v2/venues/explore?client_id=O0SATKPGPFMI4WVJEGPVF5RNTLEEFOOYJURWC4FMGJBOYQIH&client_secret=ZTKQXLN551FBBHXA442B5HXV5RB1KYRTSGOHZCNKQGH1VLJE&v=20180323&ll=40.751258,-73.992813&limit=12&query=pizza')
		.then(res => res.json())
		.then((data) => {
		  let id = 0;
		  var locations = [];
		  data.response.groups[0].items.forEach((place) => {
		    locations.push({uid: id, location: { lat: place.venue.location.lat, lng: place.venue.location.lng },
		    	address: place.venue.location.formattedAddress, name: place.venue.name, visible: true, checked: true, animation: 2, infoOpen: false })
		    
		    id++;
		  })
		  this.setState({ locations })
		})
		.catch(error => console.log(error));
	}

	toggleMenu = () => {
		const mediaWidth = window.matchMedia("(max-width: 768px)")
		const menu = document.getElementById('list-wrapper');
		const map = document.getElementById('map')

		if(menu.style.display === "none") {
		  menu.style.display = "block";
		  if (!mediaWidth.matches) {
		    map.style.width = "75%"
		  }
		} else {
		  menu.style.display = "none";
		  if (!mediaWidth.matches) {
		    map.style.width = "100%";
		  }
		}
	}

	toggleInfoWindow = (location) => {
		let locations = this.state.locations;
		if(locations[location.uid].infoOpen) {
			locations[location.uid].infoOpen = false;
			this.setState({ locations })
		} else {
			locations[location.uid].infoOpen = true;
			this.setState({ locations })
		}
	}

	animateMarker = (location) => {
		const locations = this.state.locations;
		
		locations[location.uid].animation = 1;
		locations[location.uid].infoOpen = true;
		this.setState({ locations });

		setTimeout(() => {
			locations[location.uid].animation = null;
			this.setState({ locations });
		}, 2000)
	}

  render() {

    return (

      <div className="App">
        <div className="header">
          <div className="hamburger" onClick={this.toggleMenu}></div>
          <h1>Pizza Near Penn Station</h1>
        </div>
        <LocationsList locations={this.state.locations} onHideLocation={this.hideLocation}
        	onAnimateMarker={this.animateMarker} onInfoToggle={this.toggleInfoWindow}/>
      </div>
    );
  }
}

export default App;
