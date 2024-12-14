import { useEffect, useRef } from 'react';
import Image from "next/image";
import dentistIcon from '../../public/assets/shine-search/stethoscope_icon.svg'
import loactionIcon from '../../public/assets/shine-search/pin-location-icon.svg'
import distanceIcon from '../../public/assets/shine-search/distanceIcon.svg'
import phoneIcon from '../../public/assets/shine-search/icon-phone.svg'
import directionIcon from '../../public/assets/shine-search/icon-direction.png'
import { BASE_URL } from '@/utils/constants';
interface Location {
  LATITUDE?: number;
  LONGITUDE?: number;
  LAT?: number;
  LNG?: number;
  STORE_NAME: string;
  ADDRESS1: string;
  CITY: string;
  STATE: string;
  ZIP: string;
  PHONE_NO: string;
  DOCTORS?: string;
  distance?: number;
  [key: string]: any;
}

interface MapProps {
  locations: any;
  currentLocation: { lat: number; lng: number } | null;
  selectedLocation: any;
  setLoading: (loading: boolean) => void;
}

export default function Map({ locations, currentLocation, selectedLocation, setLoading }: any) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const markers = useRef<{ marker: google.maps.Marker; infoWindow: google.maps.InfoWindow }[]>([]);
  const bounds = useRef<google.maps.LatLngBounds | null>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);
  const lastOpenedInfoWindow = useRef<google.maps.InfoWindow | null>(null); // Track the last opened InfoWindow

  const getGoogleMapsLink = (lat: number, lng: number) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  };
  
  // Function to format phone number to American format
  const formatPhoneNumber = (phoneNumber: string) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phoneNumber;
  };

  useEffect(() => {
    const initializeMap = () => {
      bounds.current = new window.google.maps.LatLngBounds();

      const map = new window.google.maps.Map(mapRef.current!, {
        center: { lat: 39.8283, lng: -98.5795 },
        zoom: 4,
        gestureHandling: "greedy",
      });

      mapInstance.current = map;

      if (currentLocation) {
        new window.google.maps.Marker({
          position: currentLocation,
          map: map,
          title: 'Your Location',
          icon: {
            //url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            url: `${BASE_URL}/assets/shine-search/pulsing-location-pin.svg`,
            scaledSize: new window.google.maps.Size(40, 40),
          },
        });
      }

      markers.current.forEach(markerItem => {
        markerItem.marker.setMap(null);
      });
      markers.current = [];

      locations.forEach((location) => {
        const lat = location.LATITUDE !== 0 ? location.LATITUDE! : location.LAT!;
        const lng = location.LONGITUDE !== 0 ? location.LONGITUDE! : location.LNG!;
        const imageSources = {
          Optical: '/assets/shine-search/dental-optimal.png',
          Pharmacy: '/assets/shine-search/dentalPharmacy.png',
          Dentist: '/assets/shine-search/dentalDentist.png'
        };

        
        const marker = new window.google.maps.Marker({
          position: { lat, lng },
          map: map,
          title: location.STORE_NAME,
          icon: {
            url: imageSources[location.CATEGORY], // path to your SVG icon file
            scaledSize: new google.maps.Size(22, 29), // optional, sets the size of the icon
          },
        });

        const infoWindowContent = `
    <div>
        <h3 style="
            font-family: 'Montserrat', sans-serif;
            font-size: 16px;
            color: #222;
            font-weight: 700;
            line-height: 1.2;
            text-align: left;
            margin-bottom: 17px;
            text-transform: capitalize;
            text-decoration: unset;
            margin-bottom: 5px;
            text-transform: uppercase;
            background-repeat: no-repeat;
            background-color: transparent;
            background-position: left;
            background-size: 30px;
            padding-left: 0px;
            display: flex;
            align-items: center;
            column-gap: 10px;
        ">
        <img src="${imageSources[location.CATEGORY]}" alt="" width="22" height="29" style="margin-right: 10px;" />
        ${location.STORE_NAME}
        </h3>

        ${location?.DOCTORS && !location?.DOCTORS?.includes("N/A")? `
        <p class="doctorIconAdded" style="
            padding-left: 4px;
            font-size: 15px;
            color: #000;
            font-family: 'Open Sans', 'BlinkMacSystemFont', -apple-system, 'Roboto', 'Lucida Sans';
            margin-bottom: 3px;
            line-height: 1.4;
            border-bottom: 1px dashed #cbcbcb;
            padding-top: .5rem;
            padding-bottom: .5rem;
        ">
        <img src="${dentistIcon.src}" alt="" width="20" height="20" style="margin-right: 10px;" />
        ${location.DOCTORS}</p>` : ''}
        <p class="phoneIconAdded" style="
            padding-left: 4px;
            font-size: 15px;
            color: #000;
            font-family: 'Open Sans', 'BlinkMacSystemFont', -apple-system, 'Roboto', 'Lucida Sans';
            margin-bottom: 3px;
            line-height: 1.4;
            border-bottom: 1px dashed #cbcbcb;
            padding-top: .5rem;
            padding-bottom: .5rem;
        ">
        <img src="${phoneIcon.src}" alt="" width="20" height="20" style="margin-right: 10px;" />
        <a href="tel:${location.PHONE_NO}">${formatPhoneNumber(location.PHONE_NO)}</a>
        </p>
        <p class="distanceIconAdded" style="
            padding-left: 4px;
            font-size: 15px;
            color: #000;
            font-family: 'Open Sans', 'BlinkMacSystemFont', -apple-system, 'Roboto', 'Lucida Sans';
            margin-bottom: 3px;
            line-height: 1.4;
            border-bottom: 1px dashed #cbcbcb;
            padding-top: .5rem;
            padding-bottom: .5rem;
        ">
        <img src="${loactionIcon.src}" alt="" width="20" height="20" style="margin-right: 10px;" />
        <a href=${getGoogleMapsLink(location.LATITUDE, location.LONGITUDE)} target="_blank" rel="noopener noreferrer">
        ${location.ADDRESS1}, ${location.CITY}, ${location.STATE} ${location.ZIP.toString().padStart(5, '0')}
        </a>
        </p>       
        ${location.distance ? `
        <p class="distanceIconAdded-2" style="
            padding-left: 4px;
            font-size: 15px;
            color: #000;
            font-family: 'Open Sans', 'BlinkMacSystemFont', -apple-system, 'Roboto', 'Lucida Sans';
            margin-bottom: 3px;
            line-height: 1.4;
            border-bottom: 0px dashed #cbcbcb;
            padding-top: .5rem;
            padding-bottom: .5rem;
        ">     
        <img src="${directionIcon.src}" alt="" width="20" height="20" style="margin-right: 10px;" />
        ${location.distance.toFixed(2)} miles</p>` : ''}
    </div>
`;
   
/*
        <p class="latLongIconAdded" style="
            padding-left: 4px;
            font-size: 15px;
            color: #000;
            font-family: 'Open Sans', 'BlinkMacSystemFont', -apple-system, 'Roboto', 'Lucida Sans';
            margin-bottom: 3px;
            line-height: 1.4;
            border-bottom: 1px dashed #cbcbcb;
            padding-top: .5rem;
            padding-bottom: .5rem;
        ">
         <img src="${distanceIcon.src}" alt="" width="20" height="20" style="margin-right: 10px;" />
        Latitude: ${lat}, Longitude: ${lng}</p> */

        const infoWindow = new window.google.maps.InfoWindow({
          content: infoWindowContent,
        });

        /* marker.addListener('click', () => {
          infoWindow.open(map, marker);
        }); */

        marker.addListener('click', () => {
          if (lastOpenedInfoWindow.current) {
            lastOpenedInfoWindow.current.close(); // Close the previous InfoWindow
          }
          infoWindow.open(map, marker);
          lastOpenedInfoWindow.current = infoWindow; // Set the current InfoWindow as the last opened one
        });

        markers.current.push({ marker, infoWindow });

        bounds.current!.extend(marker.getPosition()!);
      });

      if (locations.length > 0) {
        map.fitBounds(bounds.current!);
      }

      // setLoading(false);
    };

    const checkGoogleMaps = () => {
      if (typeof window.google === 'object' && typeof window.google.maps === 'object' && window.google.maps.LatLngBounds) {
        initializeMap();
      } else {
        setTimeout(checkGoogleMaps, 100);
      }
    };

    checkGoogleMaps();
  }, [locations, currentLocation, setLoading]);

  useEffect(() => {
    if (selectedLocation && mapInstance.current) {
      const selectedMarker = markers.current.find(markerItem => {
        const lat = selectedLocation?.LATITUDE !== 0 ? selectedLocation.LATITUDE! : selectedLocation.LAT!;
        const lng = selectedLocation?.LONGITUDE !== 0 ? selectedLocation.LONGITUDE! : selectedLocation.LNG!;
        return markerItem.marker.getPosition()!.lat() === lat && markerItem.marker.getPosition()!.lng() === lng;
      });

      if (selectedMarker) {
        mapInstance.current.setCenter(selectedMarker.marker.getPosition()!);
        mapInstance.current.setZoom(15);
        selectedMarker.infoWindow.open(mapInstance.current, selectedMarker.marker);
        lastOpenedInfoWindow.current = selectedMarker.infoWindow; // Set the current InfoWindow as the last opened one
      }
    }
  }, [selectedLocation]);

  const convertToMiles = (distanceInKm: number) => {
    return (distanceInKm / 1.60934).toFixed(2);
  };

  return (
    <div className="map-container">
      <div ref={mapRef} className="map"></div>
      <style jsx>{`
      p.doctorIconAdded{
        background-image: url(../assets/shine-search/stethoscope_icon.svg);
        background-repeat: no-repeat;
        background-size: 22px;
        background-position: left center;
        padding-left: 28px !important;
      }
        .map-container {
          position: relative;
          height: 100%;
          width: 100%;
        }
        .gm-style-iw-ch{ display:none;}
        .gm-style-iw-chr {
          position: absolute;
          right: -13px;
          top: -13px;
      } 
      .gm-style-iw-d {
        padding-top: 16px;
      }
        .map {
          height: 100%;
          width: 100%;
        }
        h3{
          font-family: "Montserrat", sans-serif;
          font-size: 16px;
          color: #565759;
          font-weight: 700;
          line-height: 1.2;
          text-align: left;
          margin-bottom: 17px;
          text-transform: capitalize;
          text-decoration: unset;
          margin-bottom: 5px;
          text-transform: uppercase;
          background-repeat: no-repeat;
          background-color: transparent;
          background-position: left;
          background-size: 30px;
          padding-left: 0px;
          display: flex;
          align-items: center;
          column-gap: 10px;
        }
      `}</style>
    </div>
  );
}
