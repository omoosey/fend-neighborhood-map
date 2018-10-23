import React, { Component } from "react";
import { Marker, InfoWindow } from "react-google-maps";

class LocationsMarker extends Component {

	state = {
		isOpen: false
	}

	handleClick = () => {
		let isOpen = this.state.isOpen;
		if(isOpen) {
			isOpen = false;
			this.setState({ isOpen })
		} else {
			isOpen = true;
			this.setState({ isOpen })
		}
	}

	render() {
		return(
			<Marker
				position={this.props.location}
				visible={this.props.visible}
				onClick={this.handleClick}
				animation={this.props.animation}
			>
				{this.state.isOpen && <InfoWindow onCloseClick={this.handleClick}>
					<div>{this.props.address[0]} <br/> {this.props.address[1]} <br/> {this.props.address[2]}</div>
				</InfoWindow>}
			</Marker>
		);
	}
}

export default LocationsMarker