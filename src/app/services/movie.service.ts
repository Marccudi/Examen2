import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../models/Movies.model';

const baseUrl = 'https://api.themoviedb.org/3/movie/';
const API_KEY='?api_key=fb4e2111a7042ca52ce47c96e093533b&page=1'
const all=baseUrl+'popular'+API_KEY;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Movies[]> {
    return this.http.get<Movies[]>(all)
  }

  get(id:any):Observable<Movies>{
    return this.http.get(`${baseUrl}/${id}${API_KEY}`);
  }

  findByTitle(Title:any): Observable<Movies[]>{
    return this.http.get<Movies[]>(`${baseUrl}?Title=${Title}`);
  }
}
