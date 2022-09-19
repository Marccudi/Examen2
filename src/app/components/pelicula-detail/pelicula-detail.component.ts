import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-detail',
  templateUrl: './pelicula-detail.component.html',
  styleUrls: ['./pelicula-detail.component.css']
})
export class PeliculaDetailComponent implements OnInit {
  mensaje='';
  id:string|null="";
  movie:any = null

  baseUrlp1 = 'https://api.themoviedb.org/3/movie/';
  baseUrlp2 = '?api_key=fb4e2111a7042ca52ce47c96e093533b';

  // currentMovie= Movie

  constructor() { }

  ngOnInit(): void {
  }

}
