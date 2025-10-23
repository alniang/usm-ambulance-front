export interface Ambulance {
  // id: string;
  // name: string;
  // type: AmbulanceType;
  // status: AmbulanceStatus;
  // capacity: number;
  // imageUrl: string;
  // pricePerKm: number;
  // basePrice: number;
  // equipment: string[];
  // features: string[];
  // description: string;
  // licensePlate: string;
  // year: number;
  // id: string ; // Identifiant unique
  // marque: string ;  // Exemple : Mercedes
  // modele: string ; // Exemple : Sprinter
  // type: string [] ;// Catégorie d’ambulance
  // equipements: string[] ; // Exemple : ["brancard", "oxygène", "défibrillateur"]
  // disponible: boolean ;// Dispo oui/non
  // photos: string[]; // URLs des photos
}

// export enum AmbulanceType {
//   BASIC = 'BASIC',
//   ADVANCED = 'ADVANCED',
//   ICU = 'ICU',
//   NEONATAL = 'NEONATAL'
// }

// export enum AmbulanceStatus {
//   AVAILABLE = 'AVAILABLE',
//   BUSY = 'BUSY',
//   MAINTENANCE = 'MAINTENANCE'
// }



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