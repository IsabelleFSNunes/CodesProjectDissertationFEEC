import React from 'react';
import { GoogleMap as BaseGoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './GoogleMap.css';

import { useMap, useMapDispatch } from './components/MapProvider';

export interface GoogleMapProps {
  position: google.maps.LatLngLiteral;
  zoom: number;
}

function GoogleMap() {
  const mapProps = useMap();
  const dispatch = useMapDispatch();

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
  });

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(mapProps.position);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <BaseGoogleMap
      mapContainerClassName='map-container'
      center={
        mapProps?.position
      }
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={(event) => {
        dispatch({
          type: 'position',
          payload: {
            position: {
              lat: event.latLng?.lat(),
              lng: event.latLng?.lng()
            }
          }
        });
      }}
      onZoomChanged={() => {
        dispatch({
          type: 'zoom',
          payload: {
            zoom: map?.getZoom()
          }
        });
      }}
    >
      <Marker position={{
        lat: mapProps?.position.lat,
        lng: mapProps?.position.lng
      }} />
    </BaseGoogleMap>
  ) : <></>;
}

export default React.memo(GoogleMap);
