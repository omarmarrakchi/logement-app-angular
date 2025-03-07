import { Injectable } from '@angular/core';
import { Residence } from '../residence'; 
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  residenceUrl ='http://localhost:3000/residences'

  constructor(private http: HttpClient) { }

  getResidences(): Observable<Residence[]> {
    return this.http.get<Residence[]>(this.residenceUrl);
  }

  getResidence(id: number): Observable<Residence> {
    const url = `${this.residenceUrl}/${id}`;
    return this.http.get<Residence>(url);
  }

  addResidence(residence: Residence): Observable<Residence> {
    return this.http.post<Residence>(this.residenceUrl, residence);
  }

  DeleteResidence(id:number):Observable<Residence>{
    return this.http.delete<Residence>('http://localhost:3000/residences/'+id)
  }

  updateResidence(res:Residence, id:number):Observable<Residence>{
    return this.http.put<Residence>('http://localhost:3000/residences/'+id,res)
  }

}
