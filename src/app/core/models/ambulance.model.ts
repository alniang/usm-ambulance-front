export interface Ambulance {
  _id: string;
  name: string;
  type: AmbulanceType;
  status: AmbulanceStatus;
  capacity: number;
  imageUrl: string;
  pricePerKm: number;
  basePrice: number;
  equipment: string[];
  features: string[];
  description: string;
  licensePlate: string;
  year: number;
}

export enum AmbulanceType {
  BASIC = 'BASIC',
  ADVANCED = 'ADVANCED',
  ICU = 'ICU',
  NEONATAL = 'NEONATAL'
}

export enum AmbulanceStatus {
  AVAILABLE = 'AVAILABLE',
  BUSY = 'BUSY',
  MAINTENANCE = 'MAINTENANCE'
}