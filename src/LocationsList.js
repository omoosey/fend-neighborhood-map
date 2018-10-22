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
				<div className="list-wrapper">
					<input type="test" placeholder='Filter Locations' value={this.state.query} onChange={(event) => this.updateQuery(event.target.value, searchResults)}/>
					<ul>

						{searchResults.map((location) => {
							return (<div className="location-info">
										<input onChange={this.handleClick.bind(this, location)} type="checkbox" 
											key={location.uid} value={location.name} checked={location.checked} />
				        				<label htmlFor={location.name}>{location.name}</label>
				        				<div className="location-address">{location.address[0]} <br/> {location.address[1]} <br/> {location.address[2]}</div>
			        				</div>)
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