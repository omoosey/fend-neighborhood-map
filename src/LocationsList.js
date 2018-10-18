import React, { Component } from "react";
import sortBy from 'sort-by'
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

	handleClick = (location, event) => {
		this.props.onHideLocation(location)
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
				<div className="list-wrapper">
					<input type="test" placeholder='Filter Locations' value={this.state.query} onChange={(event) => this.updateQuery(event.target.value, searchResults)}/>
					<ul>
						{searchResults.map((location) => {
							return (<li key={location.uid} onClick={this.handleClick.bind(this, location)}>{location.name}</li>)
						})}
					</ul>
				</div>
				<div className="map">
					<MapContainer locations={searchResults}/>
				</div>
			</div>

		)
	}
}

export default LocationsList;