import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ambulance } from '../models/ambulance.model';
import { addDoc, collection, collectionData, doc, docData, FieldValue, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AmbulanceService {
  private apiUrlProduction = "https://usm-ambulance-back-1.onrender.com/api/ambulances";

  readonly http = inject(HttpClient);

  
  private fs = inject(Firestore);
  ambulanceCol = "ambulances";

  createDocId = (colName: string) => doc(collection(this.fs, colName)).id;
  
  getAll(): Observable<Ambulance[]> {
    return this.http.get<Ambulance[]>(this.apiUrlProduction);
  }

  getById(id: string): Observable<Ambulance> {
    return this.http.get<Ambulance>(`${this.apiUrlProduction}/${id}`);
  }

  create(ambulance: Ambulance): Observable<Ambulance> {
    return this.http.post<Ambulance>(this.apiUrlProduction, ambulance);
  }

  update(id: string, ambulance: Ambulance): Observable<Ambulance> {
    return this.http.put<Ambulance>(`${this.apiUrlProduction}/${id}`, ambulance);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrlProduction}/${id}`);
  }

  getAmbulanceById(id: string) {
    const docRef = doc(this.fs, `ambulances/${id}`);
    return docData(docRef, { idField: '_id' }) as Observable<Ambulance>;
  }

  getAmbulances(){
    const ambulanceColRef = collection(this.fs, this.ambulanceCol);
    return collectionData(ambulanceColRef, {idField: '_id'}) as Observable<Ambulance[]>;
  }

}
