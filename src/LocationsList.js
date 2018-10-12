import React, { Component } from "react";

class LocationsList extends Component {
	handleClick = (location, event) => {
		this.props.onHideLocation(location)
	}

	render() {
		return(
			<ol>
				{this.props.locations.map((location) => {
					return (<li key={location.uid} onClick={this.handleClick.bind(this, location)}>{location.name}</li>)
				})}
			</ol>
		)
	}
}

export default LocationsList;