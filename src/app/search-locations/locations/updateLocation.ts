import Location from '../../../models/Location';
import { fetchCoordinatesFromGoogle } from './googleapi'; // Adjust as per your project structure and import method

interface LocationType {
  _id: string;
  ADDRESS1: string;
  ADDRESS2: string;
  ZIP: string;
  LATITUDE: number;
  LONGITUDE: number;
}

export async function updateLocationCoordinates(locationsToUpdate: LocationType[]): Promise<void> {
  try {
    for (const location of locationsToUpdate) {
      // Check if both LATITUDE and LONGITUDE are 0
      if (location.LATITUDE === 0 && location.LONGITUDE === 0) {
        // Construct query parameters for Google API using combination of fields
        const query = `${location.ADDRESS1} ${location.ADDRESS2} ${location.ZIP}, USA`;
        
        // Fetch coordinates from Google API
        const { latitude, longitude } = await fetchCoordinatesFromGoogle(query);

        // Update location document with fetched coordinates
        await Location.updateOne(
          { _id: location._id },
          { $set: { LATITUDE: latitude, LONGITUDE: longitude } }
        );
      }
    }
  } catch (error) {
    console.error("Error updating location coordinates:", error);
  }
}
