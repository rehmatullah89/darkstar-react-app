import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Location from '../../../models/Location';
import { fetchCoordinatesFromGoogle, updateLocationCoordinates, getNearbyZips, getNearbyZipByCoordinates,getCoordinates } from './googleapi'; // Adjust path as per your project structure

export async function GET(req: Request): Promise<NextResponse> {
  await connectToDatabase();

  const { searchParams } = new URL(req.url);
  const query = searchParams.get('name');
  const category = searchParams.get('category');
  let currentLat = parseFloat(searchParams.get('lat') || '38.573936');
  let currentLng = parseFloat(searchParams.get('lng') || '-92.603760');
  const radius = parseFloat(searchParams.get('radius') || '15'); // Default to 10 Miles

  let filter: Record<string, any> = {};
  var coordinates:any = '';
  if (query && !isNaN(Number(query))) {
    // const nearbyZips = await getNearbyZips(query, radius);
    let nearbyZips = [query];
    coordinates = await getCoordinates(query);
    if (coordinates) {
      nearbyZips = await getNearbyZips(coordinates, radius);  
      currentLat = coordinates?.lat;
      currentLng = coordinates?.lng;
    }    
    console.log("nearbyZips::::::", nearbyZips);
    filter.ZIP = { $in: nearbyZips };
  } else if (query) {
    filter.STORE_NAME = { $regex: new RegExp(query, 'i') };
  } else if (query === '' && !isNaN(currentLat) && !isNaN(currentLng) && !isNaN(radius)) {
    const nearbyZips = await getNearbyZipByCoordinates(currentLat, currentLng, radius);
    console.log("nearbyZips::::::>>", nearbyZips);
    filter.ZIP = { $in: nearbyZips };
  }

  if (category) {
    filter.CATEGORY = category;
  }

  try {
    let locations = await Location.find(filter).limit(100);

    for (const location of locations) {
       if (location.LATITUDE == 0 || location.LONGITUDE == 0) {
        const shortAddress = `${location?.STORE_NAME ? location.STORE_NAME + ' ' : ''}${location?.ZIP ? String(location.ZIP).padStart(5, '0') : ''}`;
        const fullAddress = `${location?.STORE_NAME ? location.STORE_NAME + ', ' : ''}${location?.ADDRESS1 ? location.ADDRESS1 + ' ' : ''}${location?.ADDRESS2 ? location.ADDRESS2 + ', ' : ', '}${location?.CITY ? location.CITY + ', ' : ''}${location?.STATE ? location.STATE + ' ' : ''}${location?.ZIP ? String(location.ZIP).padStart(5, '0') + ', ' : ''}USA`;

        const { latitude, longitude } = await fetchCoordinatesFromGoogle(fullAddress);

        if (latitude && longitude) {
          await updateLocationCoordinates(location._id, latitude, longitude);
        }
        console.log("..... i am checking for new cords .....");
       }
    }

    locations = await Location.find(filter).limit(100);
    //console.log("Filterss ---------", filter);
    //console.log("Locationssssss ---------", locations);

    // Calculate distance from current location
    let updatedLocations = locations.map(location => {
      const lat = location.LATITUDE !== 0 ? location.LATITUDE : location.LAT;
      const lng = location.LONGITUDE !== 0 ? location.LONGITUDE : location.LNG;
      const distanceInMeters = calculateDistance(currentLat, currentLng, lat, lng);
      const distanceInMiles = distanceInMeters / 1609.34;
      // const distance = calculateDistance(currentLat, currentLng, lat, lng);
      return { ...location.toObject(), distance: distanceInMiles};
    }).filter(location => location.distance <= radius);

    // Sort by distance
    updatedLocations.sort((a, b) => a.distance - b.distance);
    //console.log("updated locations22222222", updatedLocations);

    return NextResponse.json(updatedLocations);
  } catch (error) {
    console.error("Error fetching locations:", error);
    return NextResponse.json([]); // Return empty array if there's an error
  }
}

const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
  const toRadians = (degree) => (degree * Math.PI) / 180;

  const R = 6371000; // Radius of the Earth in meters
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distanceInMeters = R * c;
  return distanceInMeters;
};