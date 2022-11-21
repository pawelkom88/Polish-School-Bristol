import React from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  minHeight: '300px',
};

export default function Map({ location }) {
  const { lat, lng } = location;

  const position = React.useMemo(
    () => ({
      lat,
      lng,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY,
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={14}
          center={position}
        >
          <MarkerF position={position} />
        </GoogleMap>
      )}
      {loadError && 'error'}
    </>
  );
}
