import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import LocationsMarker from "./Marker";

const LocationsMap = withScriptjs(withGoogleMap((props) => {

	const markers = props.locations.map( location => <LocationsMarker
		key={location.uid}
		location={location}
		position={location.location}
		address={location.address}
		visible={location.visible}
		animation={location.animation}
		infoOpen={location.infoOpen}
		onInfoToggle={props.onInfoToggle}
	/>);

	return (
		<GoogleMap aria-label="map" defaultZoom={16} center={{lat: 40.751258, lng: -73.992813}} defaultOptions={{ styles: [
				{featureType: 'poi.business', 
				stylers: [{visibility: 'off'}]
				}]}}>
			{markers}
		</GoogleMap>
	);
}))

export default LocationsMap;