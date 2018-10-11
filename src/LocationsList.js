import React, { Component } from "react";

class LocationsList extends Component {
	
	render() {
		return(
			<ol>
				{this.props.locations.map((location) => {
					return (<li>{location.name}</li>)
				})}
			</ol>
		)
	}
}

export default LocationsList;