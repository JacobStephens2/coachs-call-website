import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import mapsAPIKey from "./mapsAPIKey.js"

const containerStyle = {
  width: '375px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const LocationsMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: mapsAPIKey
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

const MapPageLocation = document.querySelector("#locationsMap");

const testContent = `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.085265684293!2d-75.37347404871379!3d40.05119807930828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c69516c87148cb%3A0x10ad9e9aa29f94b9!2sEastern%20University!5e0!3m2!1sen!2sus!4v1621371434107!5m2!1sen!2sus" width="375" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
`;

MapPageLocation.innerHTML = testContent;

export default LocationsMap