import React, { Component } from "react";
// import sortBy from 'sort-by'
import MapContainer from './MapContainer.js'

class LocationsList extends Component {
	state = {
		query: '',
		searchResults: []
	}

	updateQuery = (query, searchResults) => {
		this.setState({
			query: query.trim(),
			searchResults
		})
	}

	clearQuery = () => {
		this.setState({
			query: ''
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

		if (this.state.query) {
			const searchTerm = new RegExp(this.state.query);
			searchResults = this.props.locations.filter((location) => searchTerm.test(location.name))
			
		} else {
			searchResults = this.props.locations;
		}
		
		// FIX: sortBy causing problem since searchResults order will then differ from locations
		// searchResults.sort(sortBy('name'));

		return(
			<div className="app-wrapper">
				<div id="map">
					<MapContainer locations={searchResults} onInfoToggle={this.props.onInfoToggle}/>
				</div>
				<div id="list-wrapper">
					<input id="filter-box" type="test" placeholder='Filter Locations' value={this.state.query} onChange={(event) => this.updateQuery(event.target.value, searchResults)}/>
					<ul>
						{searchResults.map((location) => {
							return (<div key={location.uid} className="location-info">
										<div id="location-name">
											<input className="checkbox" onChange={this.handleClick.bind(this, location)} type="checkbox" 
												value={location.name} checked={location.checked} />
					        				<label key={location.uid} value={location.uid} onClick={this.handleAnimation.bind(this, location)} htmlFor={location.name}>{location.name}</label>
				        				</div>
				        				<div className="location-address">{location.address[0]} <br/> {location.address[1]} <br/> {location.address[2]}</div>
			        				</div>)
						})}
					</ul>
				</div>
				
			</div>

		)
	}
}

export default LocationsList;