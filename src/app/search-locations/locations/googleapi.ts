// googleapi.ts
import axios from 'axios';
import Location from '../../../models/Location'; // Adjust path as per your project structure
import { GOOGLE_MAPS_API_KEY } from '@/utils/constants';

interface Coordinates {
  latitude: number;
  longitude: number;
}

// Function to fetch coordinates from Google Maps Geocoding API
export async function fetchCoordinatesFromGoogle(address: string): Promise<Coordinates> {
  try {
    const fullAddress = encodeURIComponent(`${address}`);
    

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${fullAddress}&key=${GOOGLE_MAPS_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.results.length > 0) {
      const location = data.results[0].geometry.location;
      const latitude = location.lat;
      const longitude = location.lng;
      return { latitude, longitude };
    } else {
      return { latitude: 0, longitude: 0 };
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    throw error;
  }
}

// Function to update location document in MongoDB with fetched coordinates
export async function updateLocationCoordinates(locationId: string, latitude: number, longitude: number): Promise<typeof Location | null> {
  try {
    const updatedLocation = await Location.findByIdAndUpdate(locationId, {
      LATITUDE: latitude,
      LONGITUDE: longitude,
    }, { new: true });

    if (!updatedLocation) {
      throw new Error('Location not found');
    }

    return updatedLocation;
  } catch (error) {
    console.error('Error updating location coordinates:', error);
    throw error;
  }
}

export async function getNearbyZips(coordinates: any, radius: number): Promise<string[]> {
  try {
    // const coordinates = await getCoordinates(zip);
    // if (!coordinates) {
    //   console.log('Coordinates not found for ZIP code:', zip);
    //   return [zip];
    // }

    const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
      params: {
        key: GOOGLE_MAPS_API_KEY,
        location: `${coordinates.lat},${coordinates.lng}`,
        radius: radius * 1609.34,
      },
    });

    if (response.data.status === 'OK') {
      const placeIds = response.data.results.map((result: any) => result.place_id);
      const nearbyZips = await getZipsFromPlaceIds(placeIds);
      return nearbyZips;
    } else {
      console.log('Errors fetching nearby ZIP codes:', response.data.error_message || response.data.status);
      return [coordinates];
    }
  } catch (error) {
    console.log('Error fetching nearby ZIP codes:', error);
    return [coordinates];
  }
}

export async function getNearbyZipByCoordinates(currentLat: number, currentLng: number, radius: number): Promise<string[]> {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
      params: {
        key: GOOGLE_MAPS_API_KEY,
        location: `${currentLat},${currentLng}`,
        radius: radius * 1609.34,
      },
    });

    if (response.data.status === 'OK') {
      const placeIds = response.data.results.map((result: any) => result.place_id);
      const nearbyZips = await getZipsFromPlaceIds(placeIds);
      return nearbyZips;
    } else {
      console.log('Errors fetching nearby ZIP codes:', response.data.error_message || response.data.status);
      return [];
    }
  } catch (error) {
    console.log('Error fetching nearby ZIP codes:', error);
    return [];
  }
}

export async function getCoordinates(zip: string): Promise<{ lat: number; lng: number } | null> {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: zip+ ', USA',
        key: GOOGLE_MAPS_API_KEY,
      },
    });

    if (response.data.status === 'OK' && response.data.results.length > 0) {
      const location = response.data.results[0].geometry.location;
      return { lat: location.lat, lng: location.lng };
    } else {
      console.error('Error fetching coordinates for ZIP :', zip);
      return null;
    }
  } catch (error) {
    console.error('Error fetching coordinates for ZIP code:', zip, error);
    return null;
  }
}

async function getZipsFromPlaceIds(placeIds: string[]): Promise<string[]> {
  const nearbyZips = new Set<string>();

  for (const placeId of placeIds) {
    const response = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
      params: {
        place_id: placeId,
        key: GOOGLE_MAPS_API_KEY,
      },
    });

    if (response.data.status === 'OK') {
      const addressComponents = response.data.result.address_components;
      const zipCodeComponent = addressComponents.find((component: any) => component.types.includes('postal_code'));
      if (zipCodeComponent) {
        nearbyZips.add(zipCodeComponent.long_name);
      }
    }
  }

  return Array.from(nearbyZips);
}
