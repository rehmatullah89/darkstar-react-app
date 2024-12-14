// models/Location.ts
import mongoose, { Document, Schema } from 'mongoose';

// Define the TypeScript interface for the Location schema
interface LocationDocument extends Document {
  ORIGINAL_ORDER?: number;
  STORE_NAME?: string;
  STORE_NAME2?: string;
  DOCTOR_NAME?: string;
  DOCTORS?: string;
  DOCTOR_FIRST_NAME?: string;
  DOCTOR_LAST_NAME?: string;
  ADDRESS1?: string;
  ADDRESS2?: string;
  CITY?: string;
  STATE?: string;
  ZIP?: number;
  PHONE_NO?: string;
  COUNTY?: string;
  DLR_TYPE?: string;
  LAT?: number;
  LNG?: number;
  ZIP4?: number;
  TAX_ID?: number;
  ID?: string;
  LATITUDE?: number;
  LONGITUDE?: number;
  CATEGORY?: string;
}

// Define the Mongoose schema for the Location model
const LocationSchema: Schema<LocationDocument> = new Schema({
  ORIGINAL_ORDER: { type: Number, required: false },
  STORE_NAME: { type: String, required: false },
  STORE_NAME2: { type: String, required: false },
  DOCTOR_NAME: { type: String, required: false },
  DOCTORS: { type: String, required: false },
  DOCTOR_FIRST_NAME: { type: String, required: false },
  DOCTOR_LAST_NAME: { type: String, required: false },
  ADDRESS1: { type: String, required: false },
  ADDRESS2: { type: String, required: false },
  CITY: { type: String, required: false },
  STATE: { type: String, required: false },
  ZIP: { type: Number, required: false },
  PHONE_NO: { type: String, required: false },
  COUNTY: { type: String, required: false },
  DLR_TYPE: { type: String, required: false },
  LAT: { type: Number, required: false },
  LNG: { type: Number, required: false },
  ZIP4: { type: Number, required: false },
  TAX_ID: { type: Number, required: false },
  ID: { type: String, required: false },
  LATITUDE: { type: Number, required: false },
  LONGITUDE: { type: Number, required: false },
  CATEGORY: { type: String, required: false },
});

// Create or get the Location model
const Location = mongoose.models.Location || mongoose.model<LocationDocument>('Location', LocationSchema);

export default Location;
