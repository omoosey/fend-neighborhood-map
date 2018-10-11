
import React, { Component } from 'react';
import StandaloneSearchBox from "react-google-maps/lib/components/places/StandaloneSearchBox";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const LocationSearchBox = withScriptjs(withGoogleMap((props) => {
	

	return (
		<div data-standalone-searchbox="">
		    <StandaloneSearchBox
		      ref={this.props.onSearchBoxMounted}
		      bounds={this.props.bounds}
		      onPlacesChanged={this.props.onPlacesChanged}
		    >
		    	<input
			        type="text"
			        placeholder="Customized your placeholder"
			        style={{
						boxSizing: `border-box`,
						border: `1px solid transparent`,
						width: `240px`,
						height: `32px`,
						padding: `0 12px`,
						borderRadius: `3px`,
						boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
						fontSize: `14px`,
						outline: `none`,
						textOverflow: `ellipses`,
			        }}
		    	/>
		    </StandaloneSearchBox>
		    {/*<ol>
		      {this.props.places.map(({ place_id, formatted_address, geometry: { location } }) =>
		        <li key={place_id}>
		          {formatted_address}
		          {" at "}
		          ({location.lat()}, {location.lng()})
		        </li>
		      )}
		    </ol>*/}
		  </div>
	)
}))

export default LocationSearchBox;




// class LocationSearchBox extends Component {
// 	componentWillMount() {
// 		const refs = {}

// 		this.setState({
// 			places: [],
// 			onSearchBoxMounted: ref => {
// 				refs.searchBox = ref;
// 			},
// 			onPlacesChanged: () => {
// 				const places = refs.searchBox.getPlaces();

// 				this.setState({
// 					places,
// 				});
// 			},
// 		})
// 	}

// 	render(){
// 		return (
// 			<div data-standalone-searchbox="">
// 			    <StandaloneSearchBox
// 			      ref={this.props.onSearchBoxMounted}
// 			      bounds={this.props.bounds}
// 			      onPlacesChanged={this.props.onPlacesChanged}
// 			    >
// 			    	<input
// 				        type="text"
// 				        placeholder="Customized your placeholder"
// 				        style={{
// 							boxSizing: `border-box`,
// 							border: `1px solid transparent`,
// 							width: `240px`,
// 							height: `32px`,
// 							padding: `0 12px`,
// 							borderRadius: `3px`,
// 							boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
// 							fontSize: `14px`,
// 							outline: `none`,
// 							textOverflow: `ellipses`,
// 				        }}
// 			    	/>
// 			    </StandaloneSearchBox>
// 			    {/*<ol>
// 			      {this.props.places.map(({ place_id, formatted_address, geometry: { location } }) =>
// 			        <li key={place_id}>
// 			          {formatted_address}
// 			          {" at "}
// 			          ({location.lat()}, {location.lng()})
// 			        </li>
// 			      )}
// 			    </ol>*/}
// 			  </div>
// 		)
// 	}
// }

// export default LocationSearchBox;