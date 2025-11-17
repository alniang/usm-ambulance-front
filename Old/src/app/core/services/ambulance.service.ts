import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ambulance } from '../models/ambulance.model';

@Injectable({
  providedIn: 'root'
})
export class AmbulanceService {
  private apiUrl = 'http://localhost:5000/api/ambulances';
  private apiUrlProduction = "https://usm-ambulance-back-1.onrender.com/api/ambulances";

  // constructor(private http: HttpClient) {}
  readonly http = inject(HttpClient);
  
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
}
