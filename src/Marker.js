import React, { Component } from "react";
import { Marker, InfoWindow } from "react-google-maps";

class LocationsMarker extends Component {

	handleClick = (key, event) => {
		console.log(key)
	}

	render() {
		return(
			<Marker
				position={this.props.location}
				visible={this.props.visible}
				onClick={this.handleClick.bind(this, this.props.locID)}
				animation={this.props.animation}
			/>
		);
	}
}

export default LocationsMarker