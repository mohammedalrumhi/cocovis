import React, { useEffect, useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";


const MapContainer = ({ google }) => {
  const [markers, setMarkers] = useState([]);

  // useEffect(() => {
  //   // Listen to Firebase database for marker updates
  //   const markersRef = database.ref("markers");
  //   markersRef.on("value", (snapshot) => {
  //     const data = snapshot.val();
  //     if (data) {
  //       const newMarkers = Object.keys(data).map((key) => {
  //         return {
  //           id: key,
  //           lat: data[key].lat,
  //           lng: data[key].lng,
  //         };
  //       });
  //       setMarkers(newMarkers);
  //     }
  //   });

  //   // Clean up the listener when the component is unmounted
  //   return () => {
  //     markersRef.off();
  //   };
  // }, []);

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <Map
        google={google}
        zoom={14}
        initialCenter={{ lat: 37.7749, lng: -122.4194 }} // Default center (San Francisco)
        style={{ width: "100%", height: "100%" }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDtS19nokgjtlLggOVmiQVk4dkmeL8r7zU", // Replace with your Google Maps API key
})(MapContainer);
