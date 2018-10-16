import React, { Component } from "react";
import { Marker } from "react-google-maps";

class LocationsMarker extends Component {

	render() {
		return(
			<Marker
				position={this.props.location}
				visible={this.props.visible}
			/>
		);
	}
}

export default LocationsMarker