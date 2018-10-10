import React, { Component } from "react";
import { Marker } from "react-google-maps";

export default class DoctorMarker extends Component {
	render() {
		console.log(this.props.location)
		return(
			<Marker
				position={this.props.location}
			>
			</Marker>
		);
	}
}