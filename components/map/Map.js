import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import Spinner from '../spinner/Spinner';

const containerStyle = {
  maxWidth: '1280px',
  minHeight: '50vh',
  margin: '0 auto 1rem',
};

export default function Map({ location }) {
  const { lat, lng } = location;

  const position = useMemo(
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
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={14}
          center={position}
        >
          <MarkerF position={position} />
        </GoogleMap>
      ) : (
        <Spinner />
      )}
      {loadError && 'error'}
    </>
  );
}
