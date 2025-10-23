import { Ambulance } from "./ambulance.model";

export interface BookingRequest {
  ambulanceId: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  pickupAddress: string;
  destinationAddress: string;
  pickupDate: Date;
  pickupTime: string;
  patientName: string;
  patientAge?: number;
  medicalCondition?: string;
  specialRequirements?: string;
  estimatedDistance?: number;
  estimatedPrice?: number;
}

export interface BookingResponse {
  id: string;
  bookingNumber: string;
  status: BookingStatus;
  createdAt: Date;
  ambulance: Ambulance;
  customer: {
    name: string;
    phone: string;
    email?: string;
  };
  totalPrice: number;
  message: string;
}

export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}