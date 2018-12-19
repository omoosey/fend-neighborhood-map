import React, { Component } from "react";
import { Marker, InfoWindow, StreetViewPanorama } from "react-google-maps";

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
				tabIndex="0"
			>
				{this.props.infoOpen && <InfoWindow onCloseClick={this.handleClick.bind(this, this.props.location)}>
					<div>{this.props.address[0]} <br/> {this.props.address[1]} <br/> {this.props.address[2]} <div id="streetview"><StreetViewPanorama defaultPosition={this.props.position} visible/></div></div>
				</InfoWindow>}
			</Marker>
		);
	}
}

export default LocationsMarker