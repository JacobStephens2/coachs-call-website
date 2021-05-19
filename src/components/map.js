import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import mapsAPIKey from "./mapsAPIKey.js"

const containerStyle = {
  width: '375px',
  height: '400px'
};

const center = {
  lat: 40.05120629190717,
  lng: -75.37134437493822
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


export default LocationsMap