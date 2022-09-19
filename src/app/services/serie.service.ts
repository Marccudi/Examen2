import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Series } from '../models/Series.model';

const baseUrl = 'https://api.themoviedb.org/3/tv/';
const API_KEY='?api_key=fb4e2111a7042ca52ce47c96e093533b'

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Series[]> {
    return this.http.get<Series[]>(baseUrl+'popular'+API_KEY)
  }

  get(id:any):Observable<Series>{
    return this.http.get(`${baseUrl}/${id}${API_KEY}`);
  }

  findByName(name:any): Observable<Series[]>{
    return this.http.get<Series[]>(`${baseUrl}?name=${name}`);
  }



}
