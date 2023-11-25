import { useEffect, useState } from "react";

const UseGeoLocation = () => {
  const [userLocation, setUserLocation] = useState({
    position: { lat: 0, lng: 0},
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            position: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        },
        () => {
        }
      );
    } else {
    }
  }, []);

  return userLocation;
};

export default UseGeoLocation;