import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { startLocationTracking } from "../../firebase/firebase";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  
  // Define state to hold latitude, longitude, and message
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    message: "",
  });

  // Inform the user that the location will be updated every 5 seconds
  const [infoMessage, setInfoMessage] = useState("سيتم تحديث الموقع كل 5 ثواني");

  // Update location in the state
  const updateLocation = (latitude, longitude) => {
    setLocation({
      latitude: latitude,
      longitude: longitude,
      message: "تم تحديث الموقع بنجاح", // Arabic message (Location updated successfully)
    });
  };

  // Start location tracking when the component mounts
  useEffect(() => {
    const userId = currentUser.user.email;  // Use email or userId for Firebase
    startLocationTracking(userId); // Start tracking location every 5s
  }, [currentUser]);

  useEffect(() => {
    // Subscribe to the location updates
    const interval = setInterval(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            updateLocation(latitude, longitude);
          },
          (error) => {
            console.error(error);
            setLocation({
              latitude: null,
              longitude: null,
              message: "فشل في الحصول على الموقع", // Arabic message (Failed to get location)
            });
          }
        );
      }
    }, 5000); // Update every 5 seconds

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Info message to inform the user about the 5-second updates */}
          <div className="text-center mb-4">
            <p className="text-sm text-blue-500 font-medium">{infoMessage}</p>
          </div>

          <h1 className="text-2xl font-bold mb-4">موقعك الحالي:</h1>

          {/* Display Latitude and Longitude */}
          {location.latitude !== null && location.longitude !== null ? (
            <div className="text-center">
              <p className="text-lg font-semibold">
                <span className="text-blue-500">خط العرض:</span> {location.latitude}
              </p>
              <p className="text-lg font-semibold">
                <span className="text-blue-500">خط الطول:</span> {location.longitude}
              </p>
            </div>
          ) : (
            <p className="text-red-500 mt-4">لم يتم تحديث الموقع بعد</p> // Arabic message (Location not updated yet)
          )}

          {/* Display Message */}
          <p className="mt-4 text-lg text-green-600">{location.message}</p>
        </div>
      </div>
    </>
  );
};

export default Home;
