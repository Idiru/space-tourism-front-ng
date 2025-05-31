import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Destination {
  id: number;
  name: string;
  description: string;
  range: number;
  travelTime: number;
}

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  private apiUrl = `${environment.apiURL}/destinations`;

  constructor(private http: HttpClient) {}

  getDestination(): Observable<Destination[]> {
    return this.http.get<Destination[]>(this.apiUrl);
  }
}
