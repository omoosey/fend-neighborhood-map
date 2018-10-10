import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import Marker from "./Marker";

const LocationsMap = withScriptjs(withGoogleMap((props) => {
	const markers = props.locations.map( location => <Marker
		key={location.uid}
		location={location.location}
	/>);

	return (
		<GoogleMap defaultZoom={14} center={{lat: 40.7413549, lng: -73.9980244}}>
			{markers}
		</GoogleMap>
	);
}))

export default LocationsMap;