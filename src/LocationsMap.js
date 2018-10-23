import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import LocationsMarker from "./Marker";

const LocationsMap = withScriptjs(withGoogleMap((props) => {

	const markers = props.locations.map( location => <LocationsMarker
		key={location.uid}
		location={location.location}
		visible={location.visible}
		locID={location.uid}
		animation={location.animation}
	/>);

	return (
		<GoogleMap defaultZoom={16} center={{lat: 40.751258, lng: -73.992813}} defaultOptions={{ styles: [
				{featureType: 'poi.business', 
				stylers: [{visibility: 'off'}]
				}]}}>
			{markers}
		</GoogleMap>
	);
}))

export default LocationsMap;