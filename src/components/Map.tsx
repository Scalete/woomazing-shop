import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '476px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export const Map:React.FC = () => {
  return (
    <div className="container">
        <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_API_KEY}`}
        >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >
        </GoogleMap>
        </LoadScript>
    </div>
  )
}