import React, { useState } from 'react'
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '1300px',
  height: '600px'
};

const center = {
  lat: 19.0760,
  lng: 72.8777
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyD7eG41TLz1eqSRb8ZxUX5JFKXTFpRoBLI"
  })

  const [map, setMap] = React.useState(null);
  const [selectedHospital, setSelectedHospital] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    hospitals.forEach(hospital => bounds.extend(hospital.position));
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const hospitals = [
    { name: 'Municipal Hospital', position: { lat: 19.01389335636671, lng: 73.03307942275397 } },
    { name: 'Fortis Hospital', position: { lat: 19.1617, lng: 72.9419 } },
    { name: 'Lilavati Hospital', position: { lat: 19.0509, lng: 72.8289 } },
    { name: 'A.S Hospital', position: { lat: 18.9410, lng: 72.8274 } },
    { name: 'H.N.R.F Hospital ', position: { lat: 18.958744, lng: 72.819850 } },
    { name: 'Sancheti Hospital', position: { lat: 18.5300, lng:  73.8530 } },
    { name: 'Ruby Hall Clinic', position: { lat: 18.5336, lng:  73.8772 } },
    // { name: 'AIIMS Delhi', position: { lat: 28.5672, lng:  77.2100 } }

      
    
    
  ];
  const handleMarkerClick = (hospital) => {
    setSelectedHospital(hospital);
    if (map) {
      map.setZoom(14); // Adjust the zoom level as needed
      map.panTo(hospital.position); // Optionally, pan to the marker position
    }
  };
  
  
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
        {map && hospitals.map((hospital, index) => (
        <Marker
          key={index}
          position={hospital.position}
          onClick={() => handleMarkerClick(hospital)}
        />
      ))}
      {selectedHospital && (
        <InfoWindow
          position={selectedHospital.position}
          onCloseClick={() => setSelectedHospital(null)}
        >
          <div>{selectedHospital.name}</div>
        </InfoWindow>
      )}
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)