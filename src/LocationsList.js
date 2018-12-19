import React, { Component } from "react";
// import sortBy from 'sort-by'
import MapContainer from './MapContainer.js'

class LocationsList extends Component {
	state = {
		query: '',
		searchResults: []
	}

	// Updates the query and searchResults array

	updateQuery = (query, searchResults) => {
		this.setState({
			query: query.trim(),
			searchResults
		})
	}

	handleAnimation = (location, event) => {
		this.props.onAnimateMarker(location);
	}

	handleClick = (location, event) => {
		this.props.onHideLocation(location, event)
	}



	render() {
		let searchResults = this.state.searchResults;

		// On load, if there is a query, set searchResults to the locations that match. If no query, set searchResults to all locations

		if (this.state.query) {
			const searchTerm = new RegExp(this.state.query);
			searchResults = this.props.locations.filter((location) => searchTerm.test(location.name))
			
		} else {
			searchResults = this.props.locations;
		}

		return(
			<div className="app-wrapper">
				<div id="map" aria-label="map">
					<MapContainer aria-label="map" locations={searchResults} onInfoToggle={this.props.onInfoToggle}/>
				</div>
				<div id="list-wrapper">
					<input tabIndex="0" aria-placeholder="Filter locations" role="textbox" id="filter-box" type="test" placeholder='Filter Locations' value={this.state.query} onChange={(event) => this.updateQuery(event.target.value, searchResults)}/>
					<ul tabIndex="0" role="list" aria-label="list">
						{searchResults.map((location) => {
							return (<li><div key={location.uid} className="location-info">
										<div id="location-name">
											<input role="listitem" aria-label={location.name} tabIndex="0" className="checkbox" onChange={this.handleClick.bind(this, location)} type="checkbox" 
												value={location.name} checked={location.checked} />
					        				<label key={location.uid} value={location.uid} onClick={this.handleAnimation.bind(this, location)} htmlFor={location.name}>{location.name}</label>
				        				</div>
				        				<div tabIndex="0" aria-label={location.address} className="location-address">{location.address[0]} <br/> {location.address[1]} <br/> {location.address[2]}</div>
			        				</div></li>)
						})}
						
					</ul>
				</div>
				
			</div>

		)
	}
}

export default LocationsList;