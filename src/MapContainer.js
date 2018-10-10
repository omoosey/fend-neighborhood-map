import React, { Component } from "react";
import LocationsMap from "./LocationsMap";

export default class MapContainer extends Component {
	render() {
		return (
			<LocationsMap 
				locations={this.props.locations}
				googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyArmEgn0ycw4K0Rx2JL0QTYLSxHJCWbNUk&v=3.exp&libraries=geometry,drawing,places"
				loadingElement={<div style={{height: `100%`}}/>}
				containerElement={<div style={{height: `600px`, width: `600px`}}/>}
				mapElement={<div style={{height: `100%`}}/>}
			/>
		);
	}
}