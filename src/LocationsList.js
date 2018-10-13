import React, { Component } from "react";
import sortBy from 'sort-by'

class LocationsList extends Component {
	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({
			query: query.trim()
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
		let searchResults;

		if (this.state.query) {
			const searchTerm = new RegExp(this.state.query);
			searchResults = this.props.locations.filter((location) => searchTerm.test(location.name))
		} else {
			searchResults = this.props.locations;
		}

		searchResults.sort(sortBy('name'))

		return(
			<div className="list-wrapper">
				<input type="test" placeholder='Filter Locations' value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>
				<ul>
					{searchResults.map((location) => {
						return (<li key={location.uid} onClick={this.handleClick.bind(this, location)}>{location.name}</li>)
					})}
				</ul>
			</div>
		)
	}
}

export default LocationsList;