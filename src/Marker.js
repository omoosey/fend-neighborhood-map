import React, { Component } from "react";
import { Marker, InfoWindow } from "react-google-maps";

class LocationsMarker extends Component {

	handleClick = (location, event) => {
		this.props.onInfoToggle(location)
	}

	render() {
		return(
			<Marker
				position={this.props.position}
				visible={this.props.visible}
				onClick={this.handleClick.bind(this, this.props.location)}
				animation={this.props.animation}
			>
				{this.props.infoOpen && <InfoWindow onCloseClick={this.handleClick.bind(this, this.props.location)}>
					<div>{this.props.address[0]} <br/> {this.props.address[1]} <br/> {this.props.address[2]}</div>
				</InfoWindow>}
			</Marker>
		);
	}
}

export default LocationsMarker